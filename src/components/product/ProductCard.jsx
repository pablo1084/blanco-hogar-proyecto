import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { formatPrice } from "../../data/products.js";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-soft">
      <Link className="block" to={`/producto/${product.slug}`}>
        <div className="aspect-[4/5] overflow-hidden bg-linen">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            src={product.image}
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase text-moss">
            {product.category}
          </p>
          <Link to={`/producto/${product.slug}`}>
            <h3 className="mt-2 font-display text-2xl font-semibold text-cocoa transition group-hover:text-clay">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-cocoa">{formatPrice(product.price)}</p>
          <button
            aria-label={`Agregar ${product.name} al carrito`}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-linen text-cocoa transition hover:bg-clay hover:text-white"
            onClick={() => addItem(product)}
            type="button"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
