"use client";

import {
  Bath,
  BedDouble,
  ExternalLink,
  Flame,
  PawPrint,
  Search,
  SlidersHorizontal,
  Snowflake,
  Trees,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { PublicProperty } from "@/lib/trackProperties";

type PropertiesResponse = {
  ok: boolean;
  properties: PublicProperty[];
};

const filterOptions = [
  { key: "petFriendly", label: "Pet Friendly", icon: PawPrint },
  { key: "skiAccess", label: "Ski Access", icon: Snowflake },
  { key: "cabin", label: "Cabin", icon: Trees },
  { key: "hotTub", label: "Hot Tub", icon: SlidersHorizontal },
  { key: "fireplace", label: "Fireplace", icon: Flame },
] as const;

type FilterKey = (typeof filterOptions)[number]["key"];

export function HomesExplorer() {
  const [properties, setProperties] = useState<PublicProperty[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [bedrooms, setBedrooms] = useState(0);
  const [guests, setGuests] = useState(0);
  const [activeFilters, setActiveFilters] = useState<Record<FilterKey, boolean>>({
    petFriendly: false,
    skiAccess: false,
    cabin: false,
    hotTub: false,
    fireplace: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadProperties() {
      try {
        const response = await fetch("/api/properties?limit=all&images=5", {
          headers: { Accept: "application/json" },
        });
        const data = (await response.json()) as PropertiesResponse;

        if (isMounted && response.ok && data.ok) {
          setProperties(data.properties);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProperties();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const selectedFilters = filterOptions
      .map((option) => option.key)
      .filter((key) => activeFilters[key]);

    return properties.filter((property) => {
      const matchesQuery =
        !normalizedQuery ||
        property.name.toLowerCase().includes(normalizedQuery) ||
        property.description.toLowerCase().includes(normalizedQuery);

      const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;
      const matchesGuests = guests === 0 || property.sleeps >= guests;
      const matchesLocation =
        location === "All Locations" || property.location === location;
      const matchesFilters = selectedFilters.every(
        (key) => property.filters[key]
      );

      return (
        matchesQuery &&
        matchesBedrooms &&
        matchesGuests &&
        matchesLocation &&
        matchesFilters
      );
    });
  }, [activeFilters, bedrooms, guests, location, properties, query]);

  const locationOptions = useMemo(() => {
    const discovered = Array.from(
      new Set(properties.map((property) => property.location).filter(Boolean))
    );
    const preferred = ["Brian Head", "Panguitch Lake", "Duck Creek"];
    return [
      "All Locations",
      ...preferred,
      ...discovered.filter((item) => !preferred.includes(item)),
    ];
  }, [properties]);

  function toggleFilter(key: FilterKey) {
    setActiveFilters((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <header className="border-b border-charcoal/10 bg-forest px-5 py-6 text-white sm:px-8 lg:px-12">
        <SiteHeader className="px-0 py-0" />
        <div className="mx-auto mt-12 flex max-w-[1480px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-aspen">
              Browse The Collection
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
              Find your mountain home.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/72">
            Handpicked mountain stays with full profiles and secure booking
            handled through our partner platform.
          </p>
        </div>
      </header>

      <section className="sticky top-0 z-20 border-b border-charcoal/10 bg-cream/95 px-5 py-4 backdrop-blur sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-3 lg:grid-cols-[1.1fr_0.55fr_0.45fr_0.45fr_1.45fr]">
          <label className="relative block">
            <span className="sr-only">Search homes</span>
            <Search
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/45"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search homes"
              className="h-12 w-full rounded border border-charcoal/12 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-cedar"
            />
          </label>

          <label>
            <span className="sr-only">Location</span>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-12 w-full rounded border border-charcoal/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-cedar"
            >
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Bedrooms</span>
            <select
              value={bedrooms}
              onChange={(event) => setBedrooms(Number(event.target.value))}
              className="h-12 w-full rounded border border-charcoal/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-cedar"
            >
              <option value={0}>Bedrooms</option>
              <option value={1}>1+ Bedrooms</option>
              <option value={2}>2+ Bedrooms</option>
              <option value={3}>3+ Bedrooms</option>
              <option value={4}>4+ Bedrooms</option>
              <option value={5}>5+ Bedrooms</option>
            </select>
          </label>

          <label>
            <span className="sr-only">Guests</span>
            <select
              value={guests}
              onChange={(event) => setGuests(Number(event.target.value))}
              className="h-12 w-full rounded border border-charcoal/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-cedar"
            >
              <option value={0}>Guests</option>
              <option value={4}>4+ Guests</option>
              <option value={6}>6+ Guests</option>
              <option value={8}>8+ Guests</option>
              <option value={10}>10+ Guests</option>
              <option value={12}>12+ Guests</option>
            </select>
          </label>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleFilter(key)}
                className={`inline-flex h-12 items-center gap-2 rounded border px-3 text-xs font-extrabold uppercase tracking-[0.08em] transition ${
                  activeFilters[key]
                    ? "border-pine bg-pine text-white"
                    : "border-charcoal/12 bg-white text-charcoal hover:border-cedar"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-charcoal/65">
              {isLoading
                ? "Loading homes..."
                : `${filteredProperties.length} homes found`}
            </p>
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-cedar">
              Full profiles open on the booking site
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {!isLoading && filteredProperties.length === 0 ? (
            <div className="mt-10 rounded border border-charcoal/10 bg-white p-8 text-center">
              <p className="font-serif text-3xl text-forest">
                No homes match those filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setLocation("All Locations");
                  setBedrooms(0);
                  setGuests(0);
                  setActiveFilters({
                    petFriendly: false,
                    skiAccess: false,
                    cabin: false,
                    hotTub: false,
                    fireplace: false,
                  });
                }}
                className="mt-5 rounded bg-cedar px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-pine"
              >
                Clear Filters
              </button>
            </div>
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function PropertyCard({ property }: { property: PublicProperty }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = property.images[selectedImage] ?? property.images[0];

  return (
    <article className="overflow-hidden rounded bg-white shadow-sm">
      <a
        href={property.bookingUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="group relative block h-72 overflow-hidden bg-forest"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${activeImage?.url ?? property.imageUrl}')` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"
          aria-hidden="true"
        />
        <ExternalLink
          className="absolute right-4 top-4 h-6 w-6 text-white drop-shadow"
          aria-hidden="true"
        />
      </a>

      <div className="grid grid-cols-5 gap-1 bg-white p-1">
        {property.images.slice(0, 5).map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            type="button"
            aria-label={`Show image ${index + 1} for ${property.name}`}
            onClick={() => setSelectedImage(index)}
            className={`h-16 bg-cover bg-center transition ${
              selectedImage === index ? "opacity-100 ring-2 ring-cedar" : "opacity-65 hover:opacity-100"
            }`}
            style={{ backgroundImage: `url('${image.url}')` }}
          />
        ))}
      </div>

      <div className="p-5">
        <h2 className="text-lg font-extrabold uppercase tracking-[0.07em] text-charcoal">
          {property.name}
        </h2>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-charcoal/68">
          {property.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-charcoal/70">
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
            {property.sleeps} Guests
          </span>
          <span className="inline-flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
            {property.bedrooms} Bedrooms
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
            {property.bathrooms} Baths
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-stone px-3 py-1.5 text-xs text-charcoal/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={property.bookingUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-cedar transition hover:text-forest"
        >
          View full profile and book
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
