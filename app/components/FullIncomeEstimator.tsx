"use client";

import {
  ArrowLeft,
  Calculator,
  Check,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function FullIncomeEstimator() {
  const [nightlyRate, setNightlyRate] = useState(450);
  const [hostedNights, setHostedNights] = useState(160);
  const [ownerShare, setOwnerShare] = useState(72);
  const [bedrooms, setBedrooms] = useState(3);

  const estimate = useMemo(() => {
    const grossStayValue = nightlyRate * hostedNights;
    const projectedOwnerIncome = grossStayValue * (ownerShare / 100);
    const monthlyAverage = projectedOwnerIncome / 12;
    const bedroomValue = projectedOwnerIncome / Math.max(bedrooms, 1);

    return { grossStayValue, projectedOwnerIncome, monthlyAverage, bedroomValue };
  }, [bedrooms, hostedNights, nightlyRate, ownerShare]);

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="relative overflow-hidden bg-forest px-5 py-10 text-white sm:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-forest/70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Cedar Mountain Stays
            </Link>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-aspen">
              Vacation Rental Income Estimate
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
              See what your property could earn.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
              Build a private, seasonally aware estimate for a Brian Head area
              property and start a more informed owner conversation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Private and secure", "Takes about two minutes", "No obligation"].map(
                (label) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-white/82">
                    <Check className="h-4 w-4 text-aspen" aria-hidden="true" />
                    {label}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 text-charcoal shadow-soft sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-cedar">
                  Projected Annual Owner Income
                </p>
                <p className="mt-2 font-serif text-5xl font-bold text-forest">
                  {formatCurrency(estimate.projectedOwnerIncome)}
                </p>
              </div>
              <div className="rounded bg-pine p-3 text-white">
                <Calculator className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-5">
              <EstimatorControl label="Bedrooms" min={1} max={7} step={1} value={bedrooms} display={`${bedrooms}`} onChange={setBedrooms} />
              <EstimatorControl label="Average Nightly Value" min={250} max={1000} step={25} value={nightlyRate} display={formatCurrency(nightlyRate)} onChange={setNightlyRate} />
              <EstimatorControl label="Hosted Nights Per Year" min={60} max={280} step={5} value={hostedNights} display={`${hostedNights} nights`} onChange={setHostedNights} />
              <EstimatorControl label="Estimated Owner Share" min={55} max={85} step={1} value={ownerShare} display={`${ownerShare}%`} onChange={setOwnerShare} />
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <Stat label="Monthly Avg." value={formatCurrency(estimate.monthlyAverage)} />
              <Stat label="Stay Value" value={formatCurrency(estimate.grossStayValue)} />
              <Stat label="Per Bedroom" value={formatCurrency(estimate.bedroomValue)} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cedar">
              Unlock your estimate
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-forest">
              Tell us where to send your private results.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-charcoal/68">
              No password required. Your information stays private and is used
              only to continue the property conversation.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                ["Local market intelligence", TrendingUp],
                ["Private owner conversation", ShieldCheck],
                ["Save and revisit details", Sparkles],
              ].map(([label, Icon]) => (
                <div key={label as string} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-white text-cedar shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-forest">
                    {label as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-lg bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field icon={User} label="Your name" type="text" />
              <Field icon={Mail} label="Email address" type="email" />
              <Field icon={Phone} label="Phone number" type="tel" />
              <Field icon={MapPin} label="Property location" type="text" />
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-forest">
                Property notes
              </span>
              <textarea
                rows={5}
                placeholder="Bedrooms, amenities, owner use, timing, or anything else helpful."
                className="w-full rounded border border-charcoal/12 bg-cream px-4 py-3 text-sm outline-none transition focus:border-cedar"
              />
            </label>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-cedar px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-pine"
            >
              Get my estimate
              <Home className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-xs leading-5 text-charcoal/55">
              Form submission can be connected in the next phase. For now, this
              page provides the full estimator experience and owner-intake
              structure.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function EstimatorControl({
  label,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold text-forest">
        <span>{label}</span>
        <span className="rounded-full bg-cream px-3 py-1 text-cedar">
          {display}
        </span>
      </span>
      <input
        aria-label={label}
        className="h-2 w-full accent-cedar"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded bg-cream p-4">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-charcoal/50">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold text-forest">{value}</p>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  type,
}: {
  icon: typeof User;
  label: string;
  type: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-forest">{label}</span>
      <span className="relative block">
        <Icon
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/45"
          aria-hidden="true"
        />
        <input
          type={type}
          className="h-12 w-full rounded border border-charcoal/12 bg-cream pl-11 pr-4 text-sm outline-none transition focus:border-cedar"
        />
      </span>
    </label>
  );
}
