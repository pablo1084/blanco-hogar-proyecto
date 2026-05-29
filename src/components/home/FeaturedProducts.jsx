import { products } from "../../data/products.js";
import Button from "../common/Button.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import ProductCard from "../product/ProductCard.jsx";

export default function FeaturedProducts() {
  return (
    <section className="bg-milk px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeader kicker="Colección destacada" title="Textiles que hacen hogar">
            Sábanas, acolchados, toallas y detalles textiles elegidos para vestir tu casa con
            calma, suavidad y estilo natural.
          </SectionHeader>
          <Button className="self-start md:self-end" to="/tienda" variant="outline">
            Ver todo
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <Reveal delay={index * 110} key={product.id}>
                <ProductCard product={product} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
