import { Camera, Home as HomeIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";

const phoneDisplay = "(435) 990-4004";
const phoneHref = "tel:+14359904004";
const email = "brianhead@skyrun.com";

const footerColumns = [
  {
    title: "Explore",
    links: [
      ["Homes", "/homes"],
      ["Destinations", "/#destinations"],
      ["Experiences", "/experiences"],
      ["Income Estimator", "/income-estimator"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Team", "/team"],
      ["Why Cedar Mountain", "/why-cedar-mountain"],
      ["Owners", "/#owners"],
      ["Contact Us", `mailto:${email}`],
    ],
  },
];

export function SiteFooter() {
  return (
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
      <div className="relative mx-auto grid max-w-[1480px] gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1.1fr_0.65fr_0.75fr_1.1fr]">
        <div>
          <Link
            className="inline-flex items-center"
            href="/"
            aria-label="Cedar Mountain Stays home"
          >
            <Image
              src={cedarLogo}
              alt="Cedar Mountain Stays"
              className="h-20 w-auto sm:h-24"
            />
          </Link>
          <p className="mt-6 max-w-56 text-sm leading-6 text-white/82">
            Your basecamp for adventure in Southern Utah.
          </p>
          <div className="mt-5 flex gap-4 text-aspen">
            <Camera className="h-5 w-5" aria-hidden="true" />
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        {footerColumns.map((column) => (
          <FooterColumn key={column.title} {...column} />
        ))}

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">
            Contact
          </h3>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-white/75">
            <a className="transition hover:text-white" href={phoneHref}>
              {phoneDisplay}
            </a>
            <a className="transition hover:text-white" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
            Local support for owners and guests across Brian Head and nearby
            mountain communities.
          </p>
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
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <nav className="lg:border-l lg:border-white/15 lg:pl-10" aria-label={title}>
      <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">
        {title}
      </h3>
      <div className="mt-5 grid gap-3 text-sm text-white/75">
        {links.map(([label, href]) => (
          <Link key={label} className="transition hover:text-white" href={href}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
