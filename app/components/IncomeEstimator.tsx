"use client";

import {
  ArrowRight,
  Flame,
  PawPrint,
  Snowflake,
  Sparkles,
  Trees,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function IncomeEstimator() {
  const [nightlyRate, setNightlyRate] = useState(425);
  const [hostedNights, setHostedNights] = useState(155);

  const preview = useMemo(
    () => nightlyRate * hostedNights * 0.72,
    [hostedNights, nightlyRate]
  );

  return (
    <section id="owners" className="bg-cream px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cedar/25 bg-white px-4 py-2 text-sm font-semibold text-cedar">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Owner Income Preview
          </div>
          <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
            Curious what your mountain home could earn?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/72 sm:text-lg">
            Start with a quick estimate, then open the full private estimator
            for a more complete owner conversation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              ["Hot Tub", Flame],
              ["Ski Access", Snowflake],
              ["Pet Friendly", PawPrint],
              ["Cabin Retreats", Trees],
            ].map(([label, Icon]) => (
              <div
                key={label as string}
                className="rounded-lg border border-forest/10 bg-white p-4 shadow-sm"
              >
                <Icon className="mb-3 h-5 w-5 text-cedar" aria-hidden="true" />
                <p className="text-sm font-semibold text-forest">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-soft sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cedar">
            Directional Annual Owner Income
          </p>
          <p className="mt-2 font-serif text-5xl font-bold text-forest">
            {formatCurrency(preview)}
          </p>

          <div className="mt-7 space-y-6">
            <EstimatorControl
              label="Average Nightly Value"
              min={250}
              max={950}
              step={25}
              value={nightlyRate}
              display={formatCurrency(nightlyRate)}
              onChange={setNightlyRate}
            />
            <EstimatorControl
              label="Hosted Nights"
              min={60}
              max={260}
              step={5}
              value={hostedNights}
              display={`${hostedNights} nights`}
              onChange={setHostedNights}
            />
          </div>

          <Link
            href="/income-estimator"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-cedar px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-pine"
          >
            Open the full estimator
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <p className="mt-5 text-xs leading-5 text-charcoal/55">
            Estimates are directional and depend on home quality, seasonality,
            owner use, pricing, and local demand.
          </p>
        </div>
      </div>
    </section>
  );
}

type EstimatorControlProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (value: number) => void;
};

function EstimatorControl({
  label,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: EstimatorControlProps) {
  return (
    <label className="block">
      <span className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold text-forest">
        <span>{label}</span>
        <span className="rounded-full bg-pine/8 px-3 py-1 text-cedar">
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
