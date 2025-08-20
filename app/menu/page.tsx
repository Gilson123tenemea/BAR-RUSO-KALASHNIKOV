// app/menu/page.tsx
import { metadata } from "./SeoMenu";
import MenuPageClient from "./MenuPageClient";

// Exportar metadata estática
export { metadata };


// Componente de página del servidor
export default function MenuPage() {
  return <MenuPageClient />;
}