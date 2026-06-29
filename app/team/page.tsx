import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
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
    role: "Co-Founder CEO | Operations, Strategy & Owner Relations",
    image: alexCartoon,
    linkedin: "https://www.linkedin.com/in/alexanderyoungbloodsoria/",
    bio: [
      "Alexander Soria brings a unique combination of business strategy, technology, and customer experience to Cedar Mountain Stays. A former United States Marine with graduate studies in economics, Alex spent much of his professional career solving operational problems, building systems, and helping businesses improve performance before entering the vacation rental industry.",
      "As a property owner himself, he understands that vacation homes are often far more than investments. They represent family memories, retirement goals, and long-term financial assets. That perspective shapes how Cedar Mountain approaches management, communication, and owner relationships.",
      "Alex oversees the business, revenue strategy, technology initiatives, marketing, and owner communications. His focus is building systems that improve transparency, increase performance, and provide owners with meaningful information about their properties.",
      "When he isn't working with homeowners or developing new ideas for the business, you'll usually find him surfing, traveling, exploring the outdoors, or spending time with his family.",
    ],
    quote:
      "For us, property management isn't simply about bookings. It's about earning trust and taking care of something that matters deeply to someone else.",
  },
  {
    name: "Paula Soria",
    role: "Co-Founder COO | Mountain Operations, Guest Experience & Property Operations",
    image: paulaCartoon,
    linkedin: "https://www.linkedin.com/in/paula-ferreira-soria-b852a5133/",
    bio: [
      "Paula Soria serves as the operational heart of Cedar Mountain Stays, leading guest experience, housekeeping standards, property readiness, and day-to-day operations.",
      "Her attention to detail and commitment to service help ensure that every property is prepared to the highest standards and every guest receives responsive, thoughtful support throughout their stay.",
      "Paula believes exceptional hospitality comes from anticipating needs before they become problems. Whether coordinating property preparation, supporting homeowners, assisting guests, or managing the countless details that happen behind the scenes, she focuses on creating experiences that feel effortless for both owners and visitors.",
      "As a mother, business owner, and longtime advocate for caring for others, she brings empathy, organization, and a strong sense of responsibility to every aspect of the company.",
      "Together with Alex, she has helped build Cedar Mountain Stays around a simple philosophy: treat every home as if it belongs to family and every guest as if they're visiting your own.",
    ],
    quote: "The little details are rarely little to the people who matter most.",
  },
  {
    name: "Matt Malepede",
    role: "Operations Manager / Business Development",
    image: mattCartoon,
    bio: [
      "Matt brings nearly a decade of hospitality and property management experience to Cedar Mountain Stays, combining strong operational leadership with a deep understanding of the Southern Utah market.",
      "Having called Southern Utah home for nearly twenty years, Matt offers extensive local knowledge and a genuine connection to the communities, properties, and experiences that make the region unique. His experience spans guest relations, property operations, owner communication, and day-to-day management, helping ensure that both guests and homeowners receive exceptional service.",
      "Matt oversees many of the behind-the-scenes details that keep properties operating smoothly, from coordinating operations and maintaining quality standards to supporting homeowners and assisting guests throughout their stay. His calm, solutions-focused approach and commitment to service help create positive experiences for both owners and visitors.",
      "Outside of work, Matt enjoys traveling, hiking, and exploring the outdoors, always seeking new adventures and experiences throughout the West.",
    ],
  },
  {
    name: "Jonelle Rush",
    role: "Housekeeping Manager",
    image: jonelleCartoon,
    bio: [
      "Jonelle Rush serves as Housekeeping Manager for Cedar Mountain Stays, where she leads the housekeeping team and helps ensure that every property meets the high standards owners expect and guests appreciate.",
      "Since joining the company as a housekeeper, Jonelle has grown into a leadership role through her dedication, work ethic, and commitment to exceptional service. She takes pride in helping create memorable guest experiences while protecting and caring for homeowners' properties as if they were her own.",
      "Prior to joining Cedar Mountain Stays, Jonelle built a strong foundation in hospitality through hotel operations, where she advanced from laundry services to Front Desk Manager. She has also worked in vacation rental housekeeping, giving her a well-rounded understanding of the guest experience and property operations from multiple perspectives.",
      "Her diverse background includes studies in automotive technology, veterinary assisting, and cosmetology, experiences that have contributed to her practical, detail-oriented approach to problem-solving and customer service.",
      "After living in several parts of Utah and spending time in Las Vegas, Jonelle now calls Brian Head home. Outside of work, she is a proud mother of three and grandmother of two, roles that continue to shape her strong values of hard work, care, and service.",
      "Jonelle believes that every home deserves attention to detail, every guest deserves a great experience, and every owner deserves confidence that their property is being cared for by people who genuinely take pride in their work.",
    ],
  },
];

type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string[];
  quote?: string;
  linkedin?: string;
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
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
              calm systems behind the scenes. More company story copy can live
              here once you are ready with the final language.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="grid overflow-hidden rounded bg-white shadow-sm lg:grid-cols-[270px_1fr]"
              >
                <div className="relative overflow-hidden bg-stone px-3 pt-4 lg:min-h-full">
                  <Image
                    src={member.image}
                    alt={`${member.name} illustration`}
                    className="mx-auto aspect-[4/5] w-full scale-110 object-contain object-bottom lg:sticky lg:top-8"
                    sizes="(min-width: 1280px) 270px, (min-width: 768px) 50vw, 100vw"
                  />
                  <Image
                    src={cedarLogo}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-2 right-3 h-14 w-auto drop-shadow-[0_8px_18px_rgba(16,37,31,0.45)] sm:h-16"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold uppercase tracking-[0.07em] text-charcoal">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-6 text-cedar">
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
                  <div className="mt-5 grid gap-4 text-sm leading-7 text-charcoal/68">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {member.quote ? (
                    <blockquote className="mt-6 border-l-2 border-aspen pl-4 font-serif text-xl leading-8 text-forest">
                      &ldquo;{member.quote}&rdquo;
                    </blockquote>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
