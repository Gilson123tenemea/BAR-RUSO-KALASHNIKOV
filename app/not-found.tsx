import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
        <p className="text-gray-400 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link href="/">
          <button className="bg-orange-500 text-black px-6 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md">
            Volver al inicio
          </button>
        </Link>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda?{" "}
            <a href="tel:+593995575335" className="text-orange-500 hover:underline">
              Llámanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}