import About from "../components/home/About.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import Hero from "../components/home/Hero.jsx";
import Services from "../components/home/Services.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Services />
    </>
  );
}
