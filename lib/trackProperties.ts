import "server-only";
import { trackFetch } from "./trackClient";

type TrackLinks = {
  self?: { href?: string };
  next?: { href?: string };
  images?: { href?: string };
};

type TrackCollection<T> = {
  _embedded?: Record<string, T[]>;
  _links?: TrackLinks;
};

type TrackImage = {
  caption?: string | null;
  order?: number | null;
  url?: string | null;
};

type TrackUnit = {
  id: number;
  isActive?: boolean;
  isBookable?: boolean;
  name?: string | null;
  shortName?: string | null;
  longDescription?: string | null;
  channelDescription?: string | null;
  websiteUrl?: string | null;
  locality?: string | null;
  maxOccupancy?: number | null;
  bedrooms?: number | null;
  fullBathrooms?: number | null;
  threeQuarterBathrooms?: number | null;
  halfBathrooms?: number | null;
  maxPets?: number | null;
  petFriendly?: boolean | number | string | null;
  isPetFriendly?: boolean | number | string | null;
  allowsPets?: boolean | number | string | null;
  amenityDescription?: string | null;
  custom?: Record<string, unknown> | null;
  _embedded?: {
    lodgingType?: { name?: string | null };
    node?: { petFriendly?: boolean | number | string | null };
    type?: {
      name?: string | null;
      petFriendly?: boolean | number | string | null;
    };
  };
  _links?: TrackLinks;
};

export type PublicPropertyImage = {
  url: string;
  alt: string;
};

export type PublicProperty = {
  id: number;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  bookingUrl: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  images: PublicPropertyImage[];
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  tags: string[];
  filters: {
    petFriendly: boolean;
    skiAccess: boolean;
    cabin: boolean;
    hotTub: boolean;
    fireplace: boolean;
  };
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85";

export function propertySlug(name: string, id: number): string {
  const base = name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");

  return `${base || "mountain-retreat"}-${id}`;
}

function rowsFromCollection<T>(
  payload: TrackCollection<T>,
  preferredKey: string
): T[] {
  const embedded = payload._embedded;
  if (!embedded) {
    return [];
  }

  if (Array.isArray(embedded[preferredKey])) {
    return embedded[preferredKey];
  }

  const firstList = Object.values(embedded).find((value) =>
    Array.isArray(value)
  );

  return firstList ?? [];
}

function pathFromTrackHref(href: string): string {
  if (!href.startsWith("http")) {
    return href;
  }

  const url = new URL(href);
  return `${url.pathname}${url.search}`;
}

function numberValue(value: unknown): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function bathroomCount(unit: TrackUnit): number {
  return (
    numberValue(unit.fullBathrooms) +
    numberValue(unit.threeQuarterBathrooms) +
    numberValue(unit.halfBathrooms) * 0.5
  );
}

function normalizeBookingUrl(url: string | null | undefined): string {
  if (!url) {
    return "https://skyrun.com/brian-head/";
  }

  try {
    const parsed = new URL(url);
    parsed.protocol = "https:";
    return parsed.toString();
  } catch {
    return "https://skyrun.com/brian-head/";
  }
}

function normalizeLocation(unit: TrackUnit): string {
  const locationText = [
    unit.locality,
    unit.name,
    unit.shortName,
    unit.longDescription,
    unit.channelDescription,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (locationText.includes("panguitch")) {
    return "Panguitch Lake";
  }

  if (locationText.includes("duck creek")) {
    return "Duck Creek";
  }

  return unit.locality?.trim() || "Brian Head";
}

function stringFromCustom(custom: TrackUnit["custom"], key: string): string {
  const value = custom?.[key];
  return typeof value === "string" ? value : "";
}

function searchableText(values: Array<string | null | undefined>): string {
  return values
    .filter(Boolean)
    .join(" ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function amenityTextFor(unit: TrackUnit): string {
  return [
    unit.amenityDescription,
    unit.longDescription,
    unit.channelDescription,
    unit._embedded?.lodgingType?.name,
    unit._embedded?.type?.name,
    stringFromCustom(unit.custom, "pms_units_pool_or_hot_tub_service_notes"),
    stringFromCustom(unit.custom, "pms_units_other_amenity_instructions"),
    stringFromCustom(unit.custom, "pms_units_fireplace_or_wood_stove_instructions"),
    stringFromCustom(unit.custom, "pms_units_pet_friendly_property_instructions"),
    unit.name,
    unit.shortName,
  ].join(" ").toLowerCase();
}

function hasAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(text));
}

function booleanValue(value: unknown): boolean | null {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    if (value === 1) {
      return true;
    }

    if (value === 0) {
      return false;
    }
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (["true", "1", "yes", "y", "t", "enabled"].includes(normalized)) {
      return true;
    }

    if (["false", "0", "no", "n", "f", "disabled"].includes(normalized)) {
      return false;
    }
  }

  return null;
}

function hasPetFriendlyEvidence(unit: TrackUnit): boolean {
  const explicitPetFields = [
    unit.petFriendly,
    unit._embedded?.type?.petFriendly,
    unit._embedded?.node?.petFriendly,
    unit.isPetFriendly,
    unit.allowsPets,
  ];

  for (const field of explicitPetFields) {
    const parsed = booleanValue(field);

    if (parsed !== null) {
      return parsed;
    }
  }

  const petInstructions = stringFromCustom(
    unit.custom,
    "pms_units_pet_friendly_property_instructions"
  );
  const petText = searchableText([
    petInstructions,
    unit.amenityDescription,
    unit.longDescription,
    unit.channelDescription,
  ]);

  if (
    hasAny(petText, [
      /\bno pets\b/,
      /\bno dogs\b/,
      /\bno animals\b/,
      /\bnot pet[- ]?friendly\b/,
      /\bpets (?:are )?not allowed\b/,
      /\bdogs (?:are )?not allowed\b/,
    ])
  ) {
    return false;
  }

  return (
    petInstructions.trim().length > 0 ||
    hasAny(petText, [
      /\bpet[- ]?friendly\b/,
      /\bpets allowed\b/,
      /\bdog[- ]?friendly\b/,
      /\bdogs allowed\b/,
    ])
  );
}

function hasHotTubEvidence(unit: TrackUnit): boolean {
  const hotTubText = searchableText([
    unit.amenityDescription,
    stringFromCustom(unit.custom, "pms_units_pool_or_hot_tub_service_notes"),
    stringFromCustom(unit.custom, "pms_units_other_amenity_instructions"),
    unit.longDescription,
    unit.channelDescription,
  ]);

  if (
    hasAny(hotTubText, [
      /\bno hot tub\b/,
      /\bhot tub (?:is )?(?:not )?available\b/,
      /\bhot tub unavailable\b/,
    ])
  ) {
    return false;
  }

  return hasAny(hotTubText, [
    /\bhot tub\b/,
    /\bjacuzzi\b/,
    /\bjetted tub\b/,
    /\bspa tub\b/,
  ]);
}

function propertyFilters(unit: TrackUnit): PublicProperty["filters"] {
  const amenityText = amenityTextFor(unit);
  const lodgingText = [
    unit._embedded?.lodgingType?.name,
    unit._embedded?.type?.name,
    unit.name,
    unit.shortName,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return {
    hotTub: hasHotTubEvidence(unit),
    skiAccess:
      amenityText.includes("ski-in") ||
      amenityText.includes("ski in") ||
      amenityText.includes("ski access") ||
      amenityText.includes("lift"),
    petFriendly: hasPetFriendlyEvidence(unit),
    fireplace:
      amenityText.includes("fireplace") ||
      amenityText.includes("wood stove") ||
      amenityText.includes("fire pit"),
    cabin:
      lodgingText.includes("cabin") ||
      lodgingText.includes("chalet") ||
      lodgingText.includes("lodge") ||
      lodgingText.includes("home") ||
      lodgingText.includes("house"),
  };
}

function propertyTags(unit: TrackUnit): string[] {
  const filters = propertyFilters(unit);
  const tags: string[] = [];

  if (filters.hotTub) {
    tags.push("Hot Tub");
  }

  if (filters.skiAccess) {
    tags.push("Ski Access");
  }

  if (filters.petFriendly) {
    tags.push("Pet Friendly");
  }

  if (filters.fireplace) {
    tags.push("Fireplace");
  }

  if (filters.cabin) {
    tags.push("Cabin");
  }

  return tags.slice(0, 3);
}

function plainText(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fullDescriptionFor(unit: TrackUnit): string {
  const description =
    plainText(unit.channelDescription) ||
    plainText(unit.longDescription) ||
    plainText(unit.shortName);

  if (!description) {
    return "A mountain retreat close to Southern Utah adventure.";
  }

  return description;
}

function descriptionFor(unit: TrackUnit): string {
  const description = fullDescriptionFor(unit);

  return description.length > 280
    ? `${description.slice(0, 277).trim()}...`
    : description;
}

function imageAlt(unit: TrackUnit, image: TrackImage | null): string {
  return (
    image?.caption?.trim() ||
    `${unit.name || unit.shortName || "Brian Head retreat"} property photo`
  );
}

async function fetchUnitImages(
  unit: TrackUnit,
  limit: number
): Promise<TrackImage[]> {
  const href = unit._links?.images?.href;
  if (!href) {
    return [];
  }

  try {
    const payload = await trackFetch<TrackCollection<TrackImage>>(
      pathFromTrackHref(href)
    );
    const images = rowsFromCollection(payload, "images")
      .filter((image) => image.url)
      .sort((a, b) => numberValue(a.order) - numberValue(b.order));

    return images.slice(0, limit);
  } catch {
    return [];
  }
}

async function fetchUnits(): Promise<TrackUnit[]> {
  const params = "includeDescriptions=1&computed=1&inherited=1";
  let payload = await trackFetch<TrackCollection<TrackUnit>>(`/units?${params}`);
  const units = rowsFromCollection(payload, "units");
  let nextHref = payload._links?.next?.href;

  while (nextHref) {
    payload = await trackFetch<TrackCollection<TrackUnit>>(
      pathFromTrackHref(nextHref)
    );
    units.push(...rowsFromCollection(payload, "units"));
    nextHref = payload._links?.next?.href;
  }

  return units;
}

function toPublicProperty(unit: TrackUnit, images: TrackImage[]): PublicProperty {
  const name = unit.name?.trim() || unit.shortName?.trim() || "Brian Head Retreat";
  const bedrooms = numberValue(unit.bedrooms);
  const sleeps = numberValue(unit.maxOccupancy) || Math.max(bedrooms * 2, 1);
  const tags = propertyTags(unit);
  const primaryImage = images[0] ?? null;
  const publicImages = images.length
    ? images.map((image) => ({
        url: image.url || FALLBACK_IMAGE,
        alt: imageAlt(unit, image),
      }))
    : [
        {
          url: FALLBACK_IMAGE,
          alt: `${unit.name || unit.shortName || "Brian Head retreat"} property photo`,
        },
      ];

  return {
    id: unit.id,
    slug: propertySlug(name, unit.id),
    name,
    description: descriptionFor(unit),
    fullDescription: fullDescriptionFor(unit),
    bookingUrl: normalizeBookingUrl(unit.websiteUrl),
    location: normalizeLocation(unit),
    imageUrl: primaryImage?.url || FALLBACK_IMAGE,
    imageAlt: imageAlt(unit, primaryImage),
    images: publicImages,
    sleeps,
    bedrooms,
    bathrooms: bathroomCount(unit),
    tags: tags.length ? tags : ["Brian Head", "Mountain Stay"],
    filters: propertyFilters(unit),
  };
}

export async function getFeaturedProperties(
  limit = 6,
  imageLimit = 1
): Promise<PublicProperty[]> {
  const safeLimit = Math.min(Math.max(limit, 1), 80);
  const safeImageLimit = Math.min(Math.max(imageLimit, 1), 5);
  const units = (await fetchUnits())
    .filter((unit) => unit.isActive !== false)
    .filter((unit) => unit.isBookable !== false)
    .filter((unit) => unit.websiteUrl)
    .slice(0, safeLimit);

  const properties = await Promise.all(
    units.map(async (unit) =>
      toPublicProperty(unit, await fetchUnitImages(unit, safeImageLimit))
    )
  );

  return properties;
}

export async function getPropertyBySlug(
  slug: string,
  imageLimit = 12
): Promise<PublicProperty | null> {
  const safeImageLimit = Math.min(Math.max(imageLimit, 1), 20);
  const units = (await fetchUnits())
    .filter((unit) => unit.isActive !== false)
    .filter((unit) => unit.isBookable !== false)
    .filter((unit) => unit.websiteUrl);
  const unit = units.find((candidate) => {
    const name =
      candidate.name?.trim() ||
      candidate.shortName?.trim() ||
      "Brian Head Retreat";

    return propertySlug(name, candidate.id) === slug;
  });

  if (!unit) {
    return null;
  }

  return toPublicProperty(unit, await fetchUnitImages(unit, safeImageLimit));
}
