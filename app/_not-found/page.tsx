"use client"; // Esto hace que todo el archivo sea Client Component
import { useSearchParams } from "next/navigation";

export default function NotFoundPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error"); // opcional, si quieres mostrar detalle

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Página no encontrada</h1>
      {error && <p>Detalle: {error}</p>}
    </div>
  );
}
