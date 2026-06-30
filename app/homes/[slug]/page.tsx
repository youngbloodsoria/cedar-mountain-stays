import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  ExternalLink,
  Flame,
  Home,
  MapPin,
  PawPrint,
  SlidersHorizontal,
  Snowflake,
  Trees,
  Users,
} from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getPropertyBySlug } from "@/lib/trackProperties";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

const amenityLabels = [
  { key: "hotTub", label: "Hot Tub", icon: SlidersHorizontal },
  { key: "skiAccess", label: "Ski Access", icon: Snowflake },
  { key: "petFriendly", label: "Pet Friendly", icon: PawPrint },
  { key: "fireplace", label: "Fireplace", icon: Flame },
  { key: "cabin", label: "Cabin", icon: Trees },
] as const;

function propertyStructuredData(property: Awaited<ReturnType<typeof getPropertyBySlug>>) {
  if (!property) {
    return {};
  }

  return {
    "@context": "https://schema.org",
    "@type": ["VacationRental", "LodgingBusiness"],
    "@id": absoluteUrl(`/homes/${property.slug}#property`),
    name: property.name,
    description: property.fullDescription,
    url: absoluteUrl(`/homes/${property.slug}`),
    image: property.images.map((image) => image.url),
    containedInPlace: {
      "@type": "Place",
      name: property.location,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressRegion: "UT",
      addressCountry: "US",
    },
    numberOfBedrooms: property.bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      value: property.sleeps,
      unitText: "guests",
    },
    amenityFeature: amenityLabels
      .filter((item) => property.filters[item.key])
      .map((item) => ({
        "@type": "LocationFeatureSpecification",
        name: item.label,
        value: true,
      })),
    makesOffer: {
      "@type": "Offer",
      url: property.bookingUrl,
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@id": absoluteUrl("/#organization"),
      name: siteName,
    },
  };
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug, 5);

  if (!property) {
    return {
      title: "Home Not Found",
    };
  }

  const title = `${property.name} in ${property.location}`;
  const description = `${property.name} sleeps ${property.sleeps} guests with ${property.bedrooms} bedroom${property.bedrooms === 1 ? "" : "s"} and ${property.bathrooms} bath${property.bathrooms === 1 ? "" : "s"} near Southern Utah mountain adventure.`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/homes/${property.slug}`),
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: absoluteUrl(`/homes/${property.slug}`),
      images: property.images.slice(0, 4).map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [property.imageUrl],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug, 12);

  if (!property) {
    notFound();
  }

  const amenities = amenityLabels.filter((item) => property.filters[item.key]);
  const [heroImage, ...galleryImages] = property.images;

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Homes", path: "/homes" },
          { name: property.name, path: `/homes/${property.slug}` },
        ])}
      />
      <JsonLd data={propertyStructuredData(property)} />

      <header className="bg-forest px-5 py-6 text-white sm:px-8 lg:px-12">
        <SiteHeader className="px-0 py-0" />
        <div className="mx-auto mt-10 max-w-[1480px]">
          <Link
            href="/homes"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden={true} />
            Back to homes
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-aspen">
                <MapPin className="h-4 w-4" aria-hidden={true} />
                {property.location}
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
                {property.name}
              </h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat icon={Users} label="Guests" value={property.sleeps} />
              <Stat icon={BedDouble} label="Bedrooms" value={property.bedrooms} />
              <Stat icon={Bath} label="Baths" value={property.bathrooms} />
            </div>
          </div>
        </div>
      </header>

      <section className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-3 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            role="img"
            aria-label={heroImage?.alt ?? property.imageAlt}
            className="min-h-[360px] rounded bg-cover bg-center shadow-soft lg:min-h-[620px]"
            style={{ backgroundImage: `url('${heroImage?.url ?? property.imageUrl}')` }}
          />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {galleryImages.slice(0, 4).map((image) => (
              <div
                key={image.url}
                role="img"
                aria-label={image.alt}
                className="min-h-[170px] rounded bg-cover bg-center shadow-sm lg:min-h-0"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[1fr_380px]">
          <article className="rounded bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cedar">
              Mountain Home Profile
            </p>
            <h2 className="font-serif text-4xl font-semibold text-forest">
              A stay built around Southern Utah adventure.
            </h2>
            <p className="mt-6 whitespace-pre-line text-base leading-8 text-charcoal/72">
              {property.fullDescription}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map(({ key, label, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-3 rounded border border-charcoal/10 bg-cream p-4"
                >
                  <Icon className="h-5 w-5 text-cedar" aria-hidden={true} />
                  <span className="text-sm font-bold text-charcoal">{label}</span>
                </div>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded bg-forest p-6 text-white shadow-soft">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-aspen">
              Ready to stay here?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              View the full profile and book.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              See availability, rates, policies, and secure checkout through the
              booking profile.
            </p>
            <a
              href={property.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-cedar px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-aspen hover:text-forest"
            >
              View full profile and book
              <ExternalLink className="h-4 w-4" aria-hidden={true} />
            </a>
            <div className="mt-6 grid gap-3 border-t border-white/12 pt-6 text-sm text-white/78">
              <Detail icon={Home} label="Location" value={property.location} />
              <Detail icon={Users} label="Sleeps" value={`${property.sleeps} guests`} />
              <Detail
                icon={BedDouble}
                label="Bedrooms"
                value={`${property.bedrooms} bedroom${property.bedrooms === 1 ? "" : "s"}`}
              />
              <Detail icon={Bath} label="Bathrooms" value={`${property.bathrooms} baths`} />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded border border-white/12 bg-white/8 p-4">
      <Icon className="h-5 w-5 text-aspen" aria-hidden={true} />
      <p className="mt-3 text-3xl font-bold">{value}</p>
      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/58">
        {label}
      </p>
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-aspen" aria-hidden={true} />
      <span className="text-white/52">{label}</span>
      <span className="ml-auto font-semibold text-white">{value}</span>
    </div>
  );
}
