import Image from "next/image";
import Link from "next/link";
import cedarLogo from "../../assets/team-page/cedarmountainstays-logo.png";

const navItems = [
  ["Homes", "/homes"],
  ["Team", "/team"],
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
          className="h-20 w-auto sm:h-24"
          priority
        />
      </Link>

      <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white/74">
        {navItems.map(([label, href]) => (
          <Link key={label} className="transition hover:text-white" href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
