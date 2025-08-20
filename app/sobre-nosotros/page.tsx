import { Suspense } from "react";
import { metadata } from "./SeoSobreNosotros";
import SobreNosotrosPageClient from "./SobreNosotrosPageClient";

export { metadata };

export default function SobreNosotrosPage() {
  return (
      <SobreNosotrosPageClient />
  );
}