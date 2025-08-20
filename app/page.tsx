import { Suspense } from "react";
import { metadata } from "./SeoInicio"; // Server Metadata
import BarKalashnikovPage from "./BarKalashnikovPage";

export { metadata };

export default function Page() {
  return (
      <BarKalashnikovPage />
  );
}
