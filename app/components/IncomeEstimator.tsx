"use client";

import { Calculator, Home, Percent, Sparkles, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function IncomeEstimator() {
  const [nightlyRate, setNightlyRate] = useState(425);
  const [hostedNights, setHostedNights] = useState(165);
  const [ownerShare, setOwnerShare] = useState(72);

  const estimate = useMemo(() => {
    const grossStayValue = nightlyRate * hostedNights;
    const projectedOwnerIncome = grossStayValue * (ownerShare / 100);
    const monthlyAverage = projectedOwnerIncome / 12;

    return {
      grossStayValue,
      projectedOwnerIncome,
      monthlyAverage,
    };
  }, [hostedNights, nightlyRate, ownerShare]);

  return (
    <section id="owners" className="bg-cream px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cedar/25 bg-white px-4 py-2 text-sm font-semibold text-cedar">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            SkyRun Income Estimator
          </div>
          <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
            See what a mountain home can make possible.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/72 sm:text-lg">
            A simple planning tool for owners exploring Cedar Mountain Stays.
            Adjust the nightly experience value, hosted nights, and projected
            owner share to model annual income potential.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Local care", Home],
              ["Clear reporting", TrendingUp],
              ["Premium stays", Sparkles],
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
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-forest/10 pb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cedar">
                Projected Annual Income
              </p>
              <p className="mt-2 font-serif text-4xl font-bold text-forest sm:text-5xl">
                {formatCurrency(estimate.projectedOwnerIncome)}
              </p>
            </div>
            <div className="rounded-lg bg-pine p-3 text-white">
              <Calculator className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-6">
            <EstimatorControl
              label="Average Nightly Stay Value"
              min={250}
              max={950}
              step={25}
              value={nightlyRate}
              display={formatCurrency(nightlyRate)}
              onChange={setNightlyRate}
            />
            <EstimatorControl
              label="Hosted Nights Per Year"
              min={60}
              max={260}
              step={5}
              value={hostedNights}
              display={`${hostedNights} nights`}
              onChange={setHostedNights}
            />
            <EstimatorControl
              label="Estimated Owner Share"
              min={55}
              max={85}
              step={1}
              value={ownerShare}
              display={`${ownerShare}%`}
              onChange={setOwnerShare}
            />
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-cream p-4">
              <p className="text-sm text-charcoal/60">Monthly average</p>
              <p className="mt-1 text-2xl font-bold text-forest">
                {formatCurrency(estimate.monthlyAverage)}
              </p>
            </div>
            <div className="rounded-lg bg-cream p-4">
              <p className="text-sm text-charcoal/60">Annual stay value</p>
              <p className="mt-1 text-2xl font-bold text-forest">
                {formatCurrency(estimate.grossStayValue)}
              </p>
            </div>
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-charcoal/55">
            <Percent
              className="mt-0.5 h-4 w-4 shrink-0 text-cedar"
              aria-hidden="true"
            />
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
