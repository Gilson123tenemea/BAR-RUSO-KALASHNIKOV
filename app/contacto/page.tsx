import { Suspense } from "react";
import { metadata } from "./SeoContacto";
import ContactoPageClient from "./ContactoPageClient";

export { metadata };

export default function ContactoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactoPageClient />
    </Suspense>
  );
}