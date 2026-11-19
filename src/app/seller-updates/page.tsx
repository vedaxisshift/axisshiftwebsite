import type { Metadata } from "next";
import { SellerUpdatesContent } from "@/components/seller/SellerUpdatesContent";

// Same content as the homepage; kept so links already shared keep working.
export const metadata: Metadata = {
  title: "Friday Seller Updates for Atlanta Listing Agents",
  description:
    "A one-page recap of showings, buyer feedback and market activity lands in your inbox every Friday, ready to forward to your sellers. Free 6-week pilot for 5 Atlanta agents.",
  alternates: { canonical: "/" },
};

export default function SellerUpdatesPage() {
  return <SellerUpdatesContent />;
}
