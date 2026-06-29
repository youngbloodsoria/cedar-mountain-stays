import Image from "next/image";
import Link from "next/link";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";

const navItems = [
  ["Homes", "/homes"],
  ["Destinations", "/#destinations"],
  ["Experiences", "/#experiences"],
  ["Why Cedar Mountain", "/why-cedar-mountain"],
  ["Team", "/team"],
  ["Owners", "/#owners"],
  ["Income Estimator", "/income-estimator"],
  ["Contact", "mailto:brianhead@skyrun.com"],
];

export function SiteNav({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="mx-auto flex max-w-[1480px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <Link
        className="inline-flex items-center"
        href="/"
        aria-label="Cedar Mountain Stays home"
      >
        <Image
          src={cedarLogo}
          alt="Cedar Mountain Stays"
          className="h-16 w-auto sm:h-24"
          priority
        />
      </Link>

      <nav
        className={`flex flex-wrap gap-x-4 gap-y-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] sm:gap-x-6 sm:text-xs sm:tracking-[0.14em] ${
          tone === "light" ? "text-forest/78" : "text-white/74"
        }`}
      >
        {navItems.map(([label, href]) => (
          <Link
            key={label}
            className={`transition ${
              tone === "light" ? "hover:text-cedar" : "hover:text-white"
            }`}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
