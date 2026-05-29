import { useMemo, useState } from "react";
import ProductCard from "../components/product/ProductCard.jsx";
import { categories, products } from "../data/products.js";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-milk px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-kicker">Tienda</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-cocoa md:text-7xl">
            Catálogo para presentar colecciones
          </h1>
          <p className="mt-5 leading-8 text-cocoa/70">
            Explorá nuestra selección por categoría y encontrá textiles para renovar el
            dormitorio, el baño y esos rincones que hacen hogar.
          </p>
        </div>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              className={`focus-ring rounded-full border px-5 py-3 text-sm font-bold uppercase transition ${
                activeCategory === category
                  ? "border-cocoa bg-cocoa text-white"
                  : "border-cocoa/15 bg-white text-cocoa hover:border-cocoa"
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
