import Image from "next/image";
import Link from "next/link";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";

const navItems = [
  ["Homes", "/homes"],
  ["Team", "/team"],
  ["Why Cedar Mountain", "/why-cedar-mountain"],
  ["Destinations", "/#destinations"],
  ["Experiences", "/#experiences"],
  ["About", "/#about"],
  ["Owners", "/#owners"],
  ["Income Estimator", "/income-estimator"],
];

export function SiteNav() {
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

      <nav className="flex flex-wrap gap-x-4 gap-y-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-white/74 sm:gap-x-6 sm:text-xs sm:tracking-[0.14em]">
        {navItems.map(([label, href]) => (
          <Link key={label} className="transition hover:text-white" href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
