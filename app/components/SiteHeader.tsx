import { SiteNav } from "./SiteNav";

export function SiteHeader({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={`px-5 py-6 sm:px-8 lg:px-12 ${
        tone === "light"
          ? "border-b border-forest/10 bg-cream/92 text-forest shadow-sm backdrop-blur"
          : "text-white"
      } ${className}`}
    >
      <SiteNav tone={tone} />
    </div>
  );
}
