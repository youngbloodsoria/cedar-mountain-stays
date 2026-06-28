import type { Metadata } from "next";
import { FullIncomeEstimator } from "../components/FullIncomeEstimator";

export const metadata: Metadata = {
  title: "Income Estimator | Cedar Mountain Stays",
  description:
    "Explore directional income potential for a Southern Utah mountain home.",
};

export default function IncomeEstimatorPage() {
  return <FullIncomeEstimator />;
}
