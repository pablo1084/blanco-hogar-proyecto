import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import Button from "../components/common/Button.jsx";
import ProductCard from "../components/product/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice, products } from "../data/products.js";
import { flyToCart } from "../components/animations/FlyToCart.jsx";

export default function ProductPage() {
  const imageRef = useRef(null);
  const { slug } = useParams();
  const { addItem } = useCart();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  const handleAddToCart = async () => {
    await flyToCart(imageRef.current);
    addItem(product);
  };

  return (
    <section className="bg-milk px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa/70 hover:text-cocoa" to="/tienda">
          <ArrowLeft size={16} />
          Volver a tienda
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <img
          
            alt={product.name}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
            src={product.image}
          />
          <div className="lg:sticky lg:top-28">
            <p className="section-kicker">{product.category}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-cocoa md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 font-display text-4xl font-semibold text-clay">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 text-lg leading-8 text-cocoa/70">{product.description}</p>

            <ul className="mt-8 grid gap-3">
              {product.details.map((detail) => (
                <li className="rounded-md bg-linen px-4 py-3 text-cocoa/75" key={detail}>
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button 
              ref={imageRef}
              onClick={handleAddToCart}>
                <ShoppingBag size={17} />
                Agregar
              </Button>
              <Button to="/#contacto" variant="outline">
                Consultar medidas
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="section-kicker">También puede gustarte</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
