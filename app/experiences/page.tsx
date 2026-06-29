import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  CalendarDays,
  Fish,
  Flame,
  Footprints,
  Heart,
  Home,
  MapPin,
  Mountain,
  Music,
  PawPrint,
  Snowflake,
  Sparkles,
  Sun,
  Trees,
  Users,
  Waves,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd } from "../components/JsonLd";
import homepageHero from "../../assets/home-page/hompage-hero.png";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Southern Utah Mountain Experiences",
  description:
    "Discover Brian Head skiing, snowboarding, hiking, mountain biking, fishing, stargazing, and Southern Utah day trips from Cedar Mountain Stays.",
  alternates: {
    canonical: absoluteUrl("/experiences"),
  },
  openGraph: {
    title: "Southern Utah Mountain Experiences",
    description:
      "Plan winter and summer adventures near Brian Head, Duck Creek, Panguitch Lake, Cedar Breaks, Bryce Canyon, and Zion.",
    url: absoluteUrl("/experiences"),
  },
};

const winterImage =
  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1400&q=85";
const ctaImage =
  "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=1800&q=85";

const winterItems = [
  ["Skiing", Snowflake],
  ["Snowboarding", Mountain],
  ["Snowshoeing", Footprints],
  ["Hot Tubs", Waves],
  ["Fireside Evenings", Flame],
];

const summerCards = [
  {
    title: "Mountain Biking",
    copy: "Over 100 miles of trails.",
    icon: Bike,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hiking",
    copy: "Cedar Breaks and alpine forests.",
    icon: Footprints,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fishing",
    copy: "Panguitch Lake and mountain streams.",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "ATV Adventures",
    copy: "Explore thousands of acres.",
    icon: Bike,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Festivals",
    copy: "Brian Head summer events.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=85",
  },
];

const adventures = [
  ["Ski Weekends", "Cabins near lifts.", Snowflake],
  ["Family Gatherings", "Large homes. Game rooms. Fireplaces.", Users],
  ["Pet Friendly", "Dog-ready homes. Trails nearby.", PawPrint],
  ["Romantic Escapes", "Hot tubs. Views. Peace and quiet.", Heart],
  ["Mountain Biking", "Bike storage. Trail access.", Bike],
  ["Stargazing", "Dark skies. Fire pits. Mountain nights.", Sparkles],
];

const mapPins = [
  ["Cedar Breaks", "left-[15%] top-[22%]"],
  ["Brian Head", "left-[48%] top-[26%]"],
  ["Duck Creek Village", "left-[36%] top-[46%]"],
  ["Panguitch Lake", "left-[68%] top-[48%]"],
  ["Bryce Canyon", "left-[58%] top-[70%]"],
  ["Zion National Park", "left-[18%] top-[76%]"],
];

const destinations = [
  {
    title: "Cedar Breaks",
    time: "10 minutes",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Bryce Canyon",
    time: "90 minutes",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Zion National Park",
    time: "2 hours",
    image:
      "https://images.unsplash.com/photo-1534384853875-30a7f2147e2c?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Panguitch Lake",
    time: "25 minutes",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Duck Creek Village",
    time: "20 minutes",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85",
  },
];

const seasons = [
  {
    title: "Winter",
    dates: "December - March",
    copy: "Snow. Skiing. Cabins. Fires.",
    icon: Snowflake,
    image:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Spring",
    dates: "April - May",
    copy: "Quiet. Wildflowers. Great deals.",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Summer",
    dates: "June - August",
    copy: "Trails. Festivals. Lakes. Adventure.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fall",
    dates: "September - October",
    copy: "Colors. Hiking. Cool evenings.",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=900&q=85",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
        ])}
      />
      <section
        className="relative min-h-screen overflow-hidden bg-forest text-white"
      >
        <Image
          src={homepageHero}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,37,31,0.78)_0%,rgba(16,37,31,0.5)_43%,rgba(16,37,31,0.12)_100%)]" />
        <div className="relative z-10">
          <SiteHeader />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-[1480px] items-center px-5 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              The Mountains Mean Something Different To Everyone.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Discover the adventures, seasons, and experiences that make
              Southern Utah unforgettable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#winter"
                className="inline-flex justify-center rounded bg-pine px-7 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-aspen hover:text-forest"
              >
                Winter Adventures
              </a>
              <a
                href="#summer"
                className="inline-flex justify-center rounded border border-white/72 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-forest"
              >
                Summer Adventures
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="winter" className="grid bg-snow lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className="min-h-[420px] bg-cover bg-center lg:min-h-[560px]"
          style={{ backgroundImage: `url('${winterImage}')` }}
          aria-label="Skiers on a snowy mountain"
        />
        <div className="grid gap-10 px-5 py-14 sm:px-10 lg:grid-cols-[1fr_240px] lg:px-14">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-forest">
              Winter in the Mountains
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Powder mornings.
              <br />
              Bluebird afternoons.
              <br />
              Quiet evenings by the fire.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/72">
              Brian Head delivers one of the West&apos;s best mountain
              experiences without the crowds.
            </p>
          </div>
          <div className="grid gap-5 border-forest/12 lg:border-l lg:pl-10">
            {winterItems.map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-4">
                <Icon className="h-8 w-8 text-forest" aria-hidden="true" />
                <p className="font-semibold text-charcoal">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="summer" className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="mb-8 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
            Summer Escape
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {summerCards.map(({ title, copy, icon: Icon, image }) => (
              <article
                key={title}
                className="group overflow-hidden rounded bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-white ring-4 ring-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-10">
                  <h3 className="font-serif text-2xl font-semibold text-forest">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/72">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-snow px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="mb-9 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
            Find Your Adventure
          </h2>
          <div className="grid gap-y-9 md:grid-cols-3 lg:grid-cols-6">
            {adventures.map(([title, copy, Icon], index) => (
              <div
                key={title as string}
                className={`px-5 text-center ${
                  index > 0 ? "lg:border-l lg:border-charcoal/15" : ""
                }`}
              >
                <Icon className="mx-auto h-10 w-10 text-forest" aria-hidden="true" />
                <h3 className="mt-5 font-extrabold text-charcoal">
                  {title as string}
                </h3>
                <p className="mt-2 text-sm leading-5 text-charcoal/68">
                  {copy as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <h2 className="mb-6 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-forest lg:text-left">
              Explore Southern Utah
            </h2>
            <div className="relative min-h-[420px] overflow-hidden rounded bg-[linear-gradient(135deg,#e6dfd2,#c9d6cd)] shadow-sm">
              <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#1f3a32_1px,transparent_1px)] [background-size:22px_22px]" />
              {mapPins.map(([label, position]) => (
                <div
                  key={label}
                  className={`absolute ${position as string} flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-snow px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-forest shadow-sm`}
                >
                  <MapPin className="h-4 w-4 fill-pine text-pine" />
                  {label as string}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {destinations.map(({ title, time, image }) => (
              <article key={title} className="overflow-hidden rounded bg-white shadow-sm">
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="p-4">
                  <h3 className="font-serif text-xl font-semibold text-forest">
                    {title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-charcoal/68">
                    <Home className="h-3.5 w-3.5 text-cedar" />
                    {time}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="mb-8 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
            Experience Every Season
          </h2>
          <div className="grid gap-4 lg:grid-cols-4">
            {seasons.map(({ title, dates, copy, icon: Icon, image }) => (
              <article
                key={title}
                className="relative min-h-[180px] overflow-hidden rounded bg-forest p-6 text-white"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-forest/58" aria-hidden="true" />
                <div className="relative">
                  <Icon className="h-9 w-9 text-white" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-3xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-sm font-extrabold">{dates}</p>
                  <p className="mt-4 max-w-44 text-sm leading-6 text-white/88">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-forest px-5 py-24 text-white sm:px-8 lg:px-12"
        style={{ backgroundImage: `url('${ctaImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-forest/72" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1480px]">
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl font-semibold">
              Adventure Starts Here.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/82">
              Whether you&apos;re chasing powder, escaping the desert heat,
              gathering family, or simply looking for a quiet weekend in the
              mountains, Cedar Mountain Stays helps you experience Southern Utah
              differently.
            </p>
            <Link
              href="/homes"
              className="mt-8 inline-flex rounded bg-cedar px-8 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-aspen hover:text-forest"
            >
              Explore Homes
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
