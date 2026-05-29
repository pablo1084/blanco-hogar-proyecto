import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-cocoa text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img
            alt="Blanco Hogar J & F"
            className="h-20 w-20 rounded-full bg-white object-contain p-1"
            src="/logo.jpg"
          />
          <h2 className="mt-5 font-display text-4xl font-semibold">Blanco Hogar J & F</h2>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            Blanquería y productos para el hogar con una curaduría cálida, natural y pensada
            para vestir cada ambiente con suavidad.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-oat">Navegación</h3>
          <ul className="mt-5 space-y-3 text-white/75">
            <li>
              <Link className="hover:text-white" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/tienda">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/#nosotros">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-oat">Contacto</h3>
          <ul className="mt-5 space-y-3 text-white/75">
            <li className="flex gap-3">
              <Mail className="mt-1 shrink-0" size={17} />
              hola@blancohogar.com
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-1 shrink-0" size={17} />
              +54 9 380 XXX XXXX
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0" size={17} />
              La Rioja, Argentina
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <button
              aria-label="Instagram"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-cocoa"
              type="button"
            >
              <Instagram size={18} />
            </button>
            <button
              aria-label="WhatsApp"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-cocoa"
              type="button"
            >
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/55">
        © 2026 Blanco Hogar J & F. Todos los derechos reservados.
      </div>
    </footer>
  );
}
