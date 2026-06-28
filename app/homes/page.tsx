import type { Metadata } from "next";
import { HomesExplorer } from "../components/HomesExplorer";

export const metadata: Metadata = {
  title: "Homes | Cedar Mountain Stays",
  description:
    "Browse Brian Head cabins, condos, and mountain retreats from Cedar Mountain Stays.",
};

export default function HomesPage() {
  return <HomesExplorer />;
}
