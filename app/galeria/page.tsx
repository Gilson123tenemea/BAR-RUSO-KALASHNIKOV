import { Suspense } from "react";
import { metadata } from "./SeoGaleria";
import GaleriaPageClient from "./GaleriaPageClient";

export { metadata };

export default function GaleriaPage() {
  return (
      <GaleriaPageClient />
  );
}