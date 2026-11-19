import type { Metadata } from "next";
import { SellerUpdatesContent } from "@/components/seller/SellerUpdatesContent";

export const metadata: Metadata = {
  title: { absolute: "Axis Shift | Friday Seller Updates for Atlanta Listing Agents" },
  description:
    "A one-page recap of showings, buyer feedback and market activity lands in your inbox every Friday, ready to forward to your sellers. Free 6-week pilot for 5 Atlanta agents.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <SellerUpdatesContent />;
}
