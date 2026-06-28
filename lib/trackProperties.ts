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
  websiteUrl?: string | null;
  maxOccupancy?: number | null;
  bedrooms?: number | null;
  fullBathrooms?: number | null;
  threeQuarterBathrooms?: number | null;
  halfBathrooms?: number | null;
  maxPets?: number | null;
  amenityDescription?: string | null;
  custom?: Record<string, unknown> | null;
  _links?: TrackLinks;
};

export type PublicProperty = {
  id: number;
  name: string;
  description: string;
  bookingUrl: string;
  imageUrl: string;
  imageAlt: string;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  tags: string[];
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85";

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
    return "https://brianhead.skyrun.com/";
  }

  try {
    const parsed = new URL(url);
    parsed.protocol = "https:";
    parsed.host = "brianhead.skyrun.com";
    return parsed.toString();
  } catch {
    return "https://brianhead.skyrun.com/";
  }
}

function stringFromCustom(custom: TrackUnit["custom"], key: string): string {
  const value = custom?.[key];
  return typeof value === "string" ? value : "";
}

function propertyTags(unit: TrackUnit): string[] {
  const amenityText = [
    unit.amenityDescription,
    stringFromCustom(unit.custom, "pms_units_pool_or_hot_tub_service_notes"),
    stringFromCustom(unit.custom, "pms_units_other_amenity_instructions"),
    stringFromCustom(unit.custom, "pms_units_fireplace_or_wood_stove_instructions"),
    stringFromCustom(unit.custom, "pms_units_pet_friendly_property_instructions"),
    unit.name,
    unit.shortName,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const tags: string[] = [];

  if (amenityText.includes("hot tub") || amenityText.includes("spa")) {
    tags.push("Hot Tub");
  }

  if (
    amenityText.includes("ski-in") ||
    amenityText.includes("ski in") ||
    amenityText.includes("ski access") ||
    amenityText.includes("lift")
  ) {
    tags.push("Ski Access");
  }

  if (
    unit.maxPets ||
    amenityText.includes("pet friendly") ||
    amenityText.includes("pets allowed")
  ) {
    tags.push("Pet Friendly");
  }

  if (
    amenityText.includes("fireplace") ||
    amenityText.includes("wood stove") ||
    amenityText.includes("fire pit")
  ) {
    tags.push("Fireplace");
  }

  return tags.slice(0, 3);
}

async function fetchUnitImage(unit: TrackUnit): Promise<TrackImage | null> {
  const href = unit._links?.images?.href;
  if (!href) {
    return null;
  }

  const payload = await trackFetch<TrackCollection<TrackImage>>(
    pathFromTrackHref(href)
  );
  const images = rowsFromCollection(payload, "images")
    .filter((image) => image.url)
    .sort((a, b) => numberValue(a.order) - numberValue(b.order));

  return images[0] ?? null;
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

function toPublicProperty(unit: TrackUnit, image: TrackImage | null): PublicProperty {
  const bedrooms = numberValue(unit.bedrooms);
  const sleeps = numberValue(unit.maxOccupancy) || Math.max(bedrooms * 2, 1);
  const tags = propertyTags(unit);

  return {
    id: unit.id,
    name: unit.name?.trim() || unit.shortName?.trim() || "Brian Head Retreat",
    description:
      unit.shortName?.trim() ||
      "A mountain retreat close to Southern Utah adventure.",
    bookingUrl: normalizeBookingUrl(unit.websiteUrl),
    imageUrl: image?.url || FALLBACK_IMAGE,
    imageAlt:
      image?.caption?.trim() ||
      `${unit.name || unit.shortName || "Brian Head retreat"} property photo`,
    sleeps,
    bedrooms,
    bathrooms: bathroomCount(unit),
    tags: tags.length ? tags : ["Brian Head", "Mountain Stay"],
  };
}

export async function getFeaturedProperties(limit = 6): Promise<PublicProperty[]> {
  const units = (await fetchUnits())
    .filter((unit) => unit.isActive !== false)
    .filter((unit) => unit.isBookable !== false)
    .filter((unit) => unit.websiteUrl)
    .slice(0, limit);

  const properties = await Promise.all(
    units.map(async (unit) => toPublicProperty(unit, await fetchUnitImage(unit)))
  );

  return properties;
}
