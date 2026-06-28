import {
  ArrowRight,
  BarChart3,
  Bike,
  Camera,
  ClipboardCheck,
  Fish,
  Home as HomeIcon,
  LockKeyhole,
  Menu,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Snowflake,
  TentTree,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homepageHero from "../assets/home-page/hompage-hero.png";
import cedarLogo from "../assets/team-page/cedarmountainstays-logo.png";
import { FeaturedHomes } from "./components/FeaturedHomes";
import { IncomeEstimator } from "./components/IncomeEstimator";

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

const navItems = [
  ["Homes", "#homes"],
  ["Team", "/team"],
  ["Why Cedar Mountain", "/why-cedar-mountain"],
  ["Destinations", "#destinations"],
  ["Experiences", "#experiences"],
  ["Owners", "#owners"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
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

        <header className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-6 py-8 sm:px-10 lg:px-16">
          <a className="inline-flex items-center" href="#" aria-label="Cedar Mountain Stays home">
            <Image
              src={cedarLogo}
              alt="Cedar Mountain Stays"
              className="h-20 w-auto sm:h-24"
            />
          </a>

          <nav className="hidden items-center gap-7 text-xs font-extrabold uppercase tracking-[0.14em] text-white/90 xl:flex">
            {navItems.map(([item, href]) => (
              <Link
                key={item}
                className="transition hover:text-aspen"
                href={href}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="#homes"
              className="hidden rounded bg-cedar px-6 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-aspen hover:text-forest sm:inline-flex"
            >
              Explore Homes
            </a>
            <button className="text-white xl:hidden" aria-label="Open menu" type="button">
              <Menu className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
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

      <footer className="relative overflow-hidden bg-forest px-6 py-10 text-white sm:px-10 lg:px-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-forest/82" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1480px] gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1.2fr_0.6fr_0.7fr_1.1fr]">
          <div>
            <a className="inline-flex items-center" href="#" aria-label="Cedar Mountain Stays home">
              <Image
                src={cedarLogo}
                alt="Cedar Mountain Stays"
                className="h-20 w-auto sm:h-24"
              />
            </a>
            <p className="mt-6 max-w-56 text-sm leading-6 text-white/82">
              Your basecamp for adventure in Southern Utah.
            </p>
            <div className="mt-5 flex gap-4 text-aspen">
              <Camera className="h-5 w-5" aria-hidden="true" />
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          <FooterColumn title="Explore" links={["Homes", "Destinations", "Experiences"]} />
          <FooterColumn title="Company" links={["Team", "Why Cedar Mountain", "Owners", "Contact Us"]} />

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">Stay In The Know</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              Get local tips, special offers, and adventure inspiration.
            </p>
            <form className="mt-5 flex gap-3">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded border border-white/15 bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-aspen"
              />
              <button
                className="rounded bg-cedar px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-aspen hover:text-forest"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1480px] flex-col gap-4 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cedar Mountain Stays. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <nav className="lg:border-l lg:border-white/15 lg:pl-10" aria-label={title}>
      <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-white/75">
        {links.map((link) => (
          <a key={link} className="transition hover:text-white" href="#">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
