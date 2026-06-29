import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd } from "../components/JsonLd";
import { TeamProfiles } from "../components/TeamProfiles";
import teamPhoto from "../../assets/team-page/team-photo-2-cropped.png";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Southern Utah Hospitality Team",
  description:
    "Meet the local Cedar Mountain Stays team caring for Southern Utah vacation homes, guest experiences, housekeeping, owner communication, and operations.",
  alternates: {
    canonical: absoluteUrl("/team"),
  },
  openGraph: {
    title: "Our Southern Utah Hospitality Team",
    description:
      "Meet the people behind Cedar Mountain Stays and the local operations team serving Brian Head and nearby mountain communities.",
    url: absoluteUrl("/team"),
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ])}
      />
      <header className="bg-forest px-5 py-6 text-white sm:px-8 lg:px-12">
        <SiteHeader className="px-0 py-0" />
        <div className="mx-auto grid max-w-[1480px] gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-aspen">
              Local Hospitality Team
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
              Mountain stays, cared for by people who live the work.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
              Cedar Mountain Stays is a Southern Utah hospitality team built
              around thoughtful homes, clear owner communication, careful
              operations, and guest experiences that feel personal rather than
              corporate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 px-4 py-2">
                <MapPin className="h-4 w-4 text-aspen" aria-hidden="true" />
                Brian Head and nearby mountain communities
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 px-4 py-2">
                <Mail className="h-4 w-4 text-aspen" aria-hidden="true" />
                Bio and contact details coming next
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-white/8 p-3 shadow-soft ring-1 ring-white/12">
            <Image
              src={teamPhoto}
              alt="Cedar Mountain Stays team"
              priority
              className="aspect-[31/26] h-full w-full rounded object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image
              src={cedarLogo}
              alt=""
              aria-hidden="true"
              className="absolute bottom-4 left-1/2 h-16 w-auto -translate-x-1/2 drop-shadow-[0_10px_24px_rgba(16,37,31,0.5)] sm:h-20"
            />
          </div>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cedar">
              Who We Are
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              A small team with a hands-on standard.
            </h2>
            <p className="mt-5 text-sm leading-7 text-charcoal/68">
              We combine premium guest hospitality with practical operating
              discipline: clean homes, fast communication, local context, and
              calm systems behind the scenes. Select a team member to read more
              about the people behind the work.
            </p>
          </div>

          <TeamProfiles />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
