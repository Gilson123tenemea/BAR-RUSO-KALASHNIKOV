import { Suspense } from "react";
import { metadata } from "./SeoMenu";
import MenuPageClient from "./MenuPageClient";

// Exportar metadata estática
export { metadata };

// Componente de página del servidor
export default function MenuPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuPageClient />
    </Suspense>
  );
}