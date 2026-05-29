import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/tienda" },
  { label: "Nosotros", to: "/#nosotros" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { itemCount, setCartOpen } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cocoa/10 bg-milk/78 text-cocoa shadow-[0_10px_40px_rgba(63,53,45,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <NavLink className="flex items-center gap-3" to="/">
          <img
            alt="Blanco Hogar J & F"
            className="h-12 w-12 rounded-full border border-black/25 bg-white object-contain p-1"
            src="/logo.jpg"
          />
          <span className="font-display text-2xl font-semibold leading-none">Blanco Hogar</span>
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `text-xs font-bold uppercase transition hover:text-clay ${
                  isActive && !link.to.includes("#") ? "text-clay" : "text-cocoa"
                }`
              }
              key={link.label}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Abrir carrito"
            className="focus-ring relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/15 bg-white/35 text-cocoa transition hover:border-cocoa/30 hover:bg-white"
            onClick={() => setCartOpen(true)}
            type="button"
          >
            <ShoppingBag size={18} />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-[11px] font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </button>
          <button
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/15 bg-white/35 text-cocoa md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-cocoa/10 bg-milk/95 px-5 py-5 shadow-soft md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-4">
            {links.map((link) => (
              <NavLink
                className="rounded-md px-3 py-3 text-sm font-bold uppercase text-cocoa hover:bg-cocoa/5"
                key={link.label}
                onClick={() => setMenuOpen(false)}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
