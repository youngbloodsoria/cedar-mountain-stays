import { Mountain, Trees } from "lucide-react";
import Link from "next/link";

const navItems = [
  ["Homes", "/homes"],
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
        className="flex items-center gap-3"
        href="/"
        aria-label="Cedar Mountain Stays home"
      >
        <span className="relative flex h-12 w-10 items-center justify-center">
          <Mountain className="absolute top-0 h-7 w-7" aria-hidden="true" />
          <Trees className="absolute bottom-0 h-8 w-8" aria-hidden="true" />
        </span>
        <span className="max-w-[130px] text-lg font-extrabold uppercase leading-[0.95] tracking-[0.18em]">
          Cedar Mountain Stays
        </span>
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
