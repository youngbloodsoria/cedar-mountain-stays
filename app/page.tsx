import {
  ArrowRight,
  BarChart3,
  Bike,
  ClipboardCheck,
  Fish,
  LockKeyhole,
  MessageCircle,
  PawPrint,
  Snowflake,
  TentTree,
  TrendingUp,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import homepageHero from "../assets/home-page/hompage-hero.png";
import { FeaturedHomes } from "./components/FeaturedHomes";
import { IncomeEstimator } from "./components/IncomeEstimator";
import { JsonLd } from "./components/JsonLd";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { absoluteUrl, breadcrumbJsonLd, siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Southern Utah Mountain Retreats",
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: `${siteName} | Southern Utah Mountain Retreats`,
    description: siteDescription,
    url: absoluteUrl("/"),
  },
};

const destinationCards = [
  {
    name: "Brian Head",
    line: "Ski. Ride. Repeat.",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Duck Creek",
    line: "Pines, trails & peace",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cedar Breaks",
    line: "Breathtaking views",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Bryce Canyon",
    line: "Nature's masterpiece",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Zion National Park",
    line: "Adventure awaits",
    image:
      "https://images.unsplash.com/photo-1534384853875-30a7f2147e2c?auto=format&fit=crop&w=1200&q=85",
  },
];

const adventures = [
  ["Ski & Snowboard", "World-class slopes just minutes away.", Snowflake],
  ["Mountain Biking", "Epic trails for every rider.", Bike],
  ["Fishing & Lakes", "Cast a line. Find your escape.", Fish],
  ["Hiking & Trails", "Explore endless mountain trails.", TentTree],
  ["Family Getaways", "Memories made together.", Users],
  ["Pet Friendly", "Bring them along. They're family.", PawPrint],
];

const operations = [
  ["Smart Operations", "Real-time data and intelligent systems keep everything running smoothly.", BarChart3],
  ["Professional Inspections", "Detailed inspections ensure every stay is exceptional.", ClipboardCheck],
  ["AI Enhanced Support", "24/7 guest support with a personal touch.", MessageCircle],
  ["Owner Transparency", "Clear reporting and full visibility into your investment.", LockKeyhole],
  ["Performance Analytics", "Data-driven decisions for better results and growth.", TrendingUp],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <section className="relative min-h-[92vh] overflow-hidden bg-forest text-white">
        <Image
          src={homepageHero}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,37,31,0.78)_0%,rgba(16,37,31,0.43)_44%,rgba(16,37,31,0.08)_100%),linear-gradient(180deg,rgba(16,37,31,0.52)_0%,rgba(16,37,31,0.08)_42%,rgba(16,37,31,0.38)_100%)]"
        />

        <header className="relative z-10 px-6 py-8 sm:px-10 lg:px-16">
          <SiteNav />
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-116px)] max-w-[1480px] items-center px-6 pb-20 sm:px-10 lg:px-16">
          <div className="max-w-[720px] pt-10">
            <h1 className="text-balance font-serif text-6xl font-semibold leading-[0.92] tracking-normal sm:text-7xl lg:text-[6.7rem]">
              Adventure
              <br />
              Starts Here<span className="text-aspen">.</span>
            </h1>
            <p className="mt-7 max-w-[520px] text-base font-extrabold uppercase leading-8 tracking-[0.14em] text-white">
              Luxury cabins & mountain retreats in Southern Utah
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#homes"
                className="inline-flex items-center justify-center rounded bg-cedar px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-aspen hover:text-forest"
              >
                Explore Homes
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center rounded border border-white/70 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-forest"
              >
                Discover Brian Head
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="bg-cream px-6 py-9 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-7 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-charcoal">
              Where To Next?
            </p>
            <h2 className="font-serif text-4xl font-semibold text-charcoal sm:text-5xl">
              Explore Our Destinations
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {destinationCards.map((destination) => (
              <a
                key={destination.name}
                href="#"
                className="group relative min-h-[230px] overflow-hidden rounded bg-forest shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold uppercase tracking-[0.08em]">
                        {destination.name}
                      </h3>
                      <p className="mt-3 text-sm text-white/88">
                        {destination.line}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="homes" className="bg-stone px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[300px_1fr]">
          <div className="lg:pt-8">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-charcoal">
              Handpicked Stays
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-charcoal">
              Featured Homes
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/78">
              Beautiful homes. Unforgettable stays. Each property is carefully
              inspected and professionally managed to ensure an exceptional
              experience.
            </p>
            <Link
              href="/homes"
              className="mt-10 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-cedar transition hover:text-forest"
            >
              View all homes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <FeaturedHomes />
        </div>
      </section>

      <section id="experiences" className="bg-pine px-6 py-8 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="mb-7 font-serif text-4xl font-semibold">Find Your Adventure</h2>
          <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
            {adventures.map(([title, copy, Icon], index) => (
              <a
                key={title as string}
                href="#"
                className={`flex min-h-28 flex-col items-center justify-start px-5 text-center ${
                  index > 0 ? "lg:border-l lg:border-white/25" : ""
                }`}
              >
                <Icon className="h-9 w-9 text-aspen" aria-hidden="true" />
                <h3 className="mt-5 text-xs font-extrabold uppercase tracking-[0.12em]">
                  {title as string}
                </h3>
                <p className="mt-3 max-w-36 text-sm leading-5 text-white/82">
                  {copy as string}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-cream px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[350px_1fr]">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-charcoal">
              Built Different
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-charcoal">
              Powered by Technology.
              <br />
              Focused on People.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/78">
              We combine cutting-edge tools with local expertise to deliver
              unmatched service for our guests and peace of mind for our
              homeowners.
            </p>
            <a
              href="#owners"
              className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-cedar transition hover:text-forest"
            >
              Learn more about our approach
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {operations.map(([title, copy, Icon], index) => (
              <div
                key={title as string}
                className={`px-6 text-center ${
                  index > 0 ? "lg:border-l lg:border-charcoal/20" : ""
                }`}
              >
                <Icon className="mx-auto h-12 w-12 stroke-[1.3] text-charcoal" aria-hidden="true" />
                <h3 className="mt-6 text-xs font-extrabold uppercase leading-5 tracking-[0.12em] text-charcoal">
                  {title as string}
                </h3>
                <p className="mt-4 text-sm leading-6 text-charcoal/76">{copy as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IncomeEstimator />

      <SiteFooter />
    </main>
  );
}
