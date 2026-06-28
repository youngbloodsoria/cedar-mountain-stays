import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { SiteNav } from "../components/SiteNav";
import teamPhoto from "../../assets/team-page/team-photo-2-cropped.png";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";
import paulaCartoon from "../../assets/team-page/paula-cartoon.png";
import alexCartoon from "../../assets/team-page/alex-cartoon.png";
import mattCartoon from "../../assets/team-page/matt-cartoon.png";
import jonelleCartoon from "../../assets/team-page/jonelle-cartoon.png";

export const metadata: Metadata = {
  title: "Our Team | Cedar Mountain Stays",
  description:
    "Meet the local hospitality team behind Cedar Mountain Stays in Southern Utah.",
};

const teamMembers: TeamMember[] = [
  {
    name: "Alex Soria",
    role: "CEO",
    image: alexCartoon,
    linkedin: "https://www.linkedin.com/",
    bio:
      "Bio coming soon. Alex leads the vision, owner relationships, and long-term strategy for Cedar Mountain Stays.",
  },
  {
    name: "Paula",
    role: "COO",
    image: paulaCartoon,
    linkedin: "https://www.linkedin.com/",
    bio:
      "Bio coming soon. Paula keeps operations moving with care, clarity, and a high bar for the guest experience.",
  },
  {
    name: "Matthew Malpede",
    role: "Operations Manager / Business Development",
    image: mattCartoon,
    bio:
      "Bio coming soon. Matthew supports day-to-day operations and helps shape thoughtful growth across the mountain market.",
  },
  {
    name: "Jonelle Rush",
    role: "Housekeeping Manager",
    image: jonelleCartoon,
    bio:
      "Bio coming soon. Jonelle leads the housekeeping standards that make each stay feel ready, warm, and cared for.",
  },
];

type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
  linkedin?: string;
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <header className="bg-forest px-5 py-6 text-white sm:px-8 lg:px-12">
        <SiteNav />
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
            <div className="absolute inset-x-0 bottom-5 flex justify-center sm:bottom-6">
              <div className="rounded-full bg-forest/72 px-3 py-1.5 shadow-soft ring-1 ring-white/18 backdrop-blur-sm sm:px-4 sm:py-2">
                <Image
                  src={cedarLogo}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-auto sm:h-16"
                />
              </div>
            </div>
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
              calm systems behind the scenes. More company story copy can live
              here once you are ready with the final language.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded bg-white shadow-sm"
              >
                <div className="relative overflow-hidden bg-stone px-3 pt-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} illustration`}
                    className="mx-auto aspect-[4/5] w-full scale-110 object-contain object-bottom"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <Image
                    src={cedarLogo}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-2 right-3 h-14 w-auto drop-shadow-[0_8px_18px_rgba(16,37,31,0.45)] sm:h-16"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold uppercase tracking-[0.07em] text-charcoal">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-cedar">
                        {member.role}
                      </p>
                    </div>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="rounded border border-charcoal/10 p-2 text-charcoal/55 transition hover:border-cedar hover:text-cedar"
                      >
                        <ExternalLink className="h-5 w-5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-5 min-h-28 text-sm leading-7 text-charcoal/66">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
