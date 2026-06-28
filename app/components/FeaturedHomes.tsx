"use client";

import { ArrowRight, Bath, BedDouble, ExternalLink, Users } from "lucide-react";
import { useEffect, useState } from "react";
import type { PublicProperty } from "@/lib/trackProperties";

const fallbackHomes: PublicProperty[] = [
  {
    id: 1,
    name: "Ridgeview Chalet",
    description: "A mountain retreat close to Southern Utah adventure.",
    bookingUrl: "https://brianhead.skyrun.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Cabin tucked into a snowy forest at dusk",
    sleeps: 12,
    bedrooms: 4,
    bathrooms: 3.5,
    tags: ["Hot Tub", "Ski Access", "Pet Friendly"],
  },
  {
    id: 2,
    name: "The Ponderosa",
    description: "A warm cabin stay built around mountain days.",
    bookingUrl: "https://brianhead.skyrun.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern mountain home glowing at dusk",
    sleeps: 10,
    bedrooms: 4,
    bathrooms: 3,
    tags: ["Hot Tub", "Game Room", "Fireplace"],
  },
  {
    id: 3,
    name: "Aspen Ridge Cabin",
    description: "A quiet basecamp for Brian Head exploration.",
    bookingUrl: "https://brianhead.skyrun.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A-frame mountain cabin with outdoor fire",
    sleeps: 8,
    bedrooms: 3,
    bathrooms: 2,
    tags: ["Hot Tub", "Pet Friendly", "Fireplace"],
  },
];

type PropertiesResponse = {
  ok: boolean;
  properties: PublicProperty[];
};

export function FeaturedHomes() {
  const [properties, setProperties] = useState<PublicProperty[]>(fallbackHomes);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadProperties() {
      try {
        const response = await fetch("/api/properties", {
          headers: { Accept: "application/json" },
        });
        const data = (await response.json()) as PropertiesResponse;

        if (isMounted && response.ok && data.ok && data.properties.length) {
          setProperties(data.properties.slice(0, 3));
          setIsLive(true);
        }
      } catch {
        if (isMounted) {
          setIsLive(false);
        }
      }
    }

    loadProperties();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="mb-4 flex items-center justify-end">
        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-cedar">
          {isLive ? "Live SkyRun Homes" : "Featured Collection"}
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {properties.slice(0, 3).map((home) => (
          <article key={home.id} className="overflow-hidden rounded bg-white shadow-sm">
            <a
              className="group relative block h-64 overflow-hidden"
              href={home.bookingUrl}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`View ${home.name} on SkyRun`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${home.imageUrl}')` }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden="true"
              />
              <ExternalLink
                className="absolute right-4 top-4 h-6 w-6 text-white drop-shadow"
                aria-hidden="true"
              />
            </a>
            <div className="p-5">
              <h3 className="text-lg font-extrabold uppercase tracking-[0.07em] text-charcoal">
                {home.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/64">
                {home.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-charcoal/70">
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
                  {home.sleeps} Guests
                </span>
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
                  {home.bedrooms} Bedrooms
                </span>
                <span className="inline-flex items-center gap-1">
                  <Bath className="h-3.5 w-3.5 text-cedar" aria-hidden="true" />
                  {home.bathrooms} Baths
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {home.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-stone px-3 py-1.5 text-xs text-charcoal/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={home.bookingUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-cedar transition hover:text-forest"
              >
                View on SkyRun
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
