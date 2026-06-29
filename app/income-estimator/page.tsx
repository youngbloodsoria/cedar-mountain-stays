import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const estimatorUrl = "https://skyrun-income-estimator.vercel.app/";

export const metadata: Metadata = {
  title: "Vacation Rental Income Estimator",
  description:
    "Estimate income potential for Southern Utah vacation rental homes near Brian Head, Duck Creek, Panguitch Lake, and nearby mountain destinations.",
  alternates: {
    canonical: absoluteUrl("/income-estimator"),
  },
  openGraph: {
    title: "Vacation Rental Income Estimator",
    description:
      "Build a private estimate for a Southern Utah mountain home and explore owner opportunities with Cedar Mountain Stays.",
    url: absoluteUrl("/income-estimator"),
  },
};

export default function IncomeEstimatorPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Income Estimator", path: "/income-estimator" },
        ])}
      />
      <header className="bg-forest px-5 py-6 text-white sm:px-8 lg:px-12">
        <SiteHeader className="px-0 py-0" />
        <div className="mx-auto mt-12 flex max-w-[1480px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-aspen">
              Owner Income Estimator
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Build your private estimate.
            </h1>
          </div>
          <a
            href={estimatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-forest"
          >
            Open in new tab
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto max-w-[1480px] overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-soft">
          <iframe
            src={estimatorUrl}
            title="Vacation rental income estimator"
            className="h-[calc(100vh-190px)] min-h-[760px] w-full"
            allow="clipboard-write"
          />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
