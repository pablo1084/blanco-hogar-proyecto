import { X } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import { formatPrice } from "../../data/products.js";
import Button from "../common/Button.jsx";

export default function CartDrawer() {
  const { isCartOpen, items, removeItem, setCartOpen, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-cocoa/40 backdrop-blur-sm transition ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setCartOpen(false)}
      />
      <aside
        aria-label="Carrito"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-milk shadow-soft transition duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cocoa/10 px-6 py-5">
          <h2 className="font-display text-3xl font-semibold text-cocoa">Tu selección</h2>
          <button
            aria-label="Cerrar carrito"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-linen text-cocoa"
            onClick={() => setCartOpen(false)}
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="font-display text-3xl font-semibold text-cocoa">Carrito vacío</p>
                <p className="mt-3 text-cocoa/65">Agregá productos a tu carrito.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div className="grid grid-cols-[84px_1fr] gap-4" key={item.id}>
                  <img
                    alt={item.name}
                    className="h-24 w-20 rounded-md object-cover"
                    src={item.image}
                  />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-cocoa">{item.name}</h3>
                        <p className="mt-1 text-sm text-cocoa/60">Cantidad: {item.quantity}</p>
                      </div>
                      <button
                        className="text-sm font-semibold text-clay hover:text-cocoa"
                        onClick={() => removeItem(item.id)}
                        type="button"
                      >
                        Quitar
                      </button>
                    </div>
                    <p className="mt-3 font-semibold text-cocoa">{formatPrice(item.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-cocoa/10 p-6">
          <div className="mb-5 flex items-center justify-between text-cocoa">
            <span className="font-semibold">Subtotal</span>
            <span className="font-display text-2xl font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <Button className="w-full" variant="primary">
            Consultar por WhatsApp
          </Button>
        </div>
      </aside>
    </>
  );
}
