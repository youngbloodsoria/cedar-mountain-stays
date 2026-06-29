import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  BarChart3,
  BedDouble,
  CheckCircle2,
  ClipboardCheck,
  Home,
  House,
  LineChart,
  Mountain,
  PhoneCall,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  TreePine,
  Users,
  Wrench,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Cedar Mountain",
  description:
    "How Cedar Mountain Stays protects Southern Utah vacation homes through housekeeping, customer service, owner communication, and technology.",
  alternates: {
    canonical: absoluteUrl("/why-cedar-mountain"),
  },
  openGraph: {
    title: "Why Cedar Mountain",
    description:
      "Learn how Cedar Mountain Stays cares for homes, protects owner investments, supports guests, and operates differently in Southern Utah.",
    url: absoluteUrl("/why-cedar-mountain"),
  },
};

const heroImage =
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85";
const housekeepingImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85";
const serviceImage =
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85";
const technologyImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85";
const ownerImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85";
const ctaImage =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85";

const housekeepingItems = [
  { label: "Cleanliness", icon: Sparkles },
  { label: "Inventory", icon: ClipboardCheck },
  { label: "Maintenance Issues", icon: Wrench },
  { label: "Damage Concerns", icon: ShieldCheck },
  { label: "Guest Readiness", icon: Home },
];

const serviceItems = [
  "Real people answering calls",
  "Fast response times",
  "Owner communication",
  "Guest support",
  "Maintenance coordination",
  "Problem solving",
];

const technologyItems = [
  "Owner performance reports",
  "Automated reporting",
  "Market insights",
  "Revenue tracking",
  "Reservation analytics",
  "Modern property systems",
];

const stats = [
  { metric: "40+", label: "Properties Managed", icon: House },
  { metric: "Thousands", label: "of Guest Nights", icon: BedDouble },
  { metric: "Local", label: "Team Members", icon: Users },
  { metric: "24/7", label: "Guest Support", icon: PhoneCall },
  { metric: "Owner", label: "Reporting", icon: BarChart3 },
  { metric: "Pro", label: "Inspections", icon: ClipboardCheck },
];

const ownerValues = [
  { label: "An Investment", icon: LineChart },
  { label: "A Retirement Asset", icon: PiggyBank },
  { label: "A Family Cabin", icon: Home },
  { label: "A Legacy Property", icon: TreePine },
];

export default function WhyCedarMountainPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Why Cedar Mountain", path: "/why-cedar-mountain" },
        ])}
      />
      <section className="relative overflow-hidden bg-cream">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[64%] bg-cover bg-center lg:block"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#f7f4ee_0%,rgba(247,244,238,0.96)_34%,rgba(247,244,238,0.45)_58%,rgba(247,244,238,0.04)_100%)]"
        />

        <div className="relative z-10">
          <SiteHeader tone="light" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1480px] items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.58fr_0.42fr] lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-cedar">
              Why Cedar Mountain
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-forest sm:text-6xl lg:text-7xl">
              We Don&apos;t Just Manage Homes.
              <span className="block text-cedar">We Protect Investments.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/78">
              Beautiful homes matter. Great vacations matter. But neither
              happens consistently without exceptional housekeeping, responsive
              people, and technology that actually works.
            </p>
            <div className="mt-8 border-l-2 border-aspen pl-5">
              <p className="text-sm leading-7 text-charcoal/70">
                Every decision starts with one question:
              </p>
              <p className="mt-2 text-xl font-extrabold leading-7 text-forest">
                Would we trust this company with our own property?
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="min-h-[360px] rounded bg-cover bg-center shadow-soft lg:hidden"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        </div>
      </section>

      <PillarSection
        number="1."
        title="Housekeeping"
        subtitle="Because clean isn't enough."
        body="Our housekeeping teams don't simply clean homes. They prepare experiences."
        image={housekeepingImage}
        imageSide="left"
      >
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {housekeepingItems.map(({ label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-8 w-8 text-forest" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold leading-4 text-charcoal/75">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-charcoal/72">
          Every property is inspected after every stay, and issues are addressed
          quickly to protect the home, the guest experience, and the owner&apos;s
          investment.
        </p>
      </PillarSection>

      <PillarSection
        number="2."
        title="Customer Service"
        subtitle="Hospitality still matters."
        body="Guests remember how they were treated. Owners remember whether anyone answered the phone."
        image={serviceImage}
        imageSide="right"
      >
        <CheckList items={serviceItems} />
        <p className="mt-8 text-base font-extrabold text-forest">
          We&apos;re local. We&apos;re available. We care.
        </p>
      </PillarSection>

      <PillarSection
        number="3."
        title="Technology"
        subtitle="Better information creates better decisions."
        body="Most managers still operate like it's 2008: spreadsheets, monthly statements, and guesswork."
        image={technologyImage}
        imageSide="left"
      >
        <CheckList items={technologyItems} />
        <p className="mt-8 text-base font-extrabold text-forest">
          Better data. Better transparency. Better results.
        </p>
      </PillarSection>

      <section className="bg-pine px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(({ metric, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-8 w-8 text-aspen" aria-hidden="true" />
              <p className="mt-4 font-serif text-3xl font-semibold">{metric}</p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/72">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Your Home Is More Than a Vacation Rental.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72">
              For most owners, this is an investment, a retirement asset, a
              family cabin, or a legacy property.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {ownerValues.map(({ label, icon: Icon }) => (
                <div key={label}>
                  <Icon className="h-9 w-9 text-cedar" aria-hidden="true" />
                  <p className="mt-3 text-sm font-extrabold text-forest">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Protect the property.", "Maximize revenue.", "Reduce stress."].map(
                (line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cedar" />
                    <p className="text-sm font-semibold leading-6 text-charcoal/78">
                      {line}
                    </p>
                  </div>
                ),
              )}
            </div>
            <p className="mt-8 text-base font-extrabold text-forest">
              We&apos;re your partner for the long term.
            </p>
          </div>
          <div
            aria-label="Premium mountain cabin interior"
            className="min-h-[420px] rounded bg-cover bg-center shadow-soft"
            style={{ backgroundImage: `url('${ownerImage}')` }}
          />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-forest px-5 py-20 text-center text-white sm:px-8 lg:px-12"
        style={{ backgroundImage: `url('${ctaImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-forest/76" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <Mountain className="mx-auto h-10 w-10 text-aspen" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
            Let&apos;s Build Something Better.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/78">
            Whether you&apos;re a guest planning a mountain escape or an owner
            looking for a management company that actually communicates, we&apos;d
            love to talk.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:brianhead@skyrun.com?subject=Property%20Consultation"
              className="inline-flex items-center justify-center rounded bg-cedar px-7 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-aspen hover:text-forest"
            >
              Schedule a Property Consultation
            </Link>
            <Link
              href="mailto:brianhead@skyrun.com"
              className="inline-flex items-center justify-center rounded border border-white/70 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-forest"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function PillarSection({
  number,
  title,
  subtitle,
  body,
  image,
  imageSide,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageSide: "left" | "right";
  children: ReactNode;
}) {
  const imageBlock = (
    <div
      aria-label={`${title} image`}
      className="min-h-[360px] bg-cover bg-center lg:min-h-[520px]"
      style={{ backgroundImage: `url('${image}')` }}
    />
  );
  const contentBlock = (
    <div className="flex items-center bg-snow px-5 py-12 sm:px-10 lg:px-14">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest text-2xl font-extrabold text-white">
            {number}
          </span>
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-[0.04em] text-forest sm:text-3xl">
              {title}
            </h2>
            <p className="mt-1 font-serif text-2xl text-cedar">{subtitle}</p>
          </div>
        </div>
        <p className="mt-8 text-base leading-8 text-charcoal/76">{body}</p>
        {children}
      </div>
    </div>
  );

  return (
    <section className="grid lg:grid-cols-2">
      {imageSide === "left" ? imageBlock : contentBlock}
      {imageSide === "left" ? contentBlock : imageBlock}
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-forest text-cream" />
          <p className="text-sm font-semibold leading-6 text-charcoal/76">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
