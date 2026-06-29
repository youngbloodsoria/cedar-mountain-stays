"use client";

import Image, { type StaticImageData } from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";
import linkedinLogo from "../../assets/team-page/linkedin_logo.png";
import paulaCartoon from "../../assets/team-page/paula-cartoon.png";
import alexCartoon from "../../assets/team-page/alex-cartoon.png";
import mattCartoon from "../../assets/team-page/matt-cartoon.png";
import jonelleCartoon from "../../assets/team-page/jonelle-cartoon.png";

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

export function TeamProfiles() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="group overflow-hidden rounded bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <button
              type="button"
              onClick={() => setSelectedMember(member)}
              className="block w-full text-left"
              aria-label={`Read ${member.name}'s bio`}
            >
              <div className="relative overflow-hidden bg-stone px-3 pt-4">
                <Image
                  src={member.image}
                  alt={`${member.name} illustration`}
                  className="mx-auto aspect-[4/5] w-full scale-110 object-contain object-bottom transition duration-500 group-hover:scale-[1.15]"
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
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-cedar">
                  Click to read bio
                </p>
                <h3 className="text-xl font-extrabold uppercase tracking-[0.07em] text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm font-semibold leading-6 text-cedar">
                  {member.role}
                </p>
                <span className="mt-5 inline-flex rounded border border-charcoal/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-forest transition group-hover:border-cedar group-hover:bg-cedar group-hover:text-white">
                  Read Bio
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedMember ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest/72 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-profile-title"
        >
          <div className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded bg-cream shadow-soft lg:grid-cols-[340px_1fr]">
            <div className="relative bg-stone px-6 pt-8">
              <Image
                src={selectedMember.image}
                alt={`${selectedMember.name} illustration`}
                className="mx-auto aspect-[4/5] w-full object-contain object-bottom"
                sizes="340px"
              />
              <Image
                src={cedarLogo}
                alt=""
                aria-hidden="true"
                className="absolute bottom-4 right-5 h-16 w-auto drop-shadow-[0_8px_18px_rgba(16,37,31,0.45)]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 rounded border border-charcoal/10 bg-white p-2 text-charcoal/60 transition hover:border-cedar hover:text-cedar"
                aria-label="Close bio"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="pr-10">
                <h3
                  id="team-profile-title"
                  className="text-3xl font-extrabold uppercase tracking-[0.07em] text-charcoal"
                >
                  {selectedMember.name}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-cedar">
                  {selectedMember.role}
                </p>
              </div>
              {selectedMember.linkedin ? (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-3 rounded border border-charcoal/10 bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-charcoal transition hover:border-cedar hover:text-cedar"
                >
                  <Image
                    src={linkedinLogo}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                  LinkedIn
                </a>
              ) : null}
              <div className="mt-6 grid gap-4 text-sm leading-7 text-charcoal/72">
                {selectedMember.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {selectedMember.quote ? (
                <blockquote className="mt-6 border-l-2 border-aspen pl-4 font-serif text-xl leading-8 text-forest">
                  &ldquo;{selectedMember.quote}&rdquo;
                </blockquote>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
