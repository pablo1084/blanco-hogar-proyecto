import { ArrowRight } from "lucide-react";
import Button from "../common/Button.jsx";
import Reveal from "../common/Reveal.jsx";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] min-h-[92svh] overflow-hidden md:min-h-[92dvh]">
      <img
        alt="ropa de cama natural"
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero-bedroom.jpg"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="pointer-events-none absolute right-4 top-24 z-10 rounded-full bg-white/45 p-2 opacity-70 shadow-soft backdrop-blur-[2px] sm:right-8 sm:top-28 sm:p-3 md:right-10 md:p-4 lg:right-12 lg:top-32 xl:right-16">
        <img
          alt=""
          className="h-24 w-24 rounded-full object-contain sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-72 lg:w-72 xl:h-[22rem] xl:w-[22rem] 2xl:h-[26rem] 2xl:w-[26rem]"
          src="/images/logo-hero.png"
        />
      </div>
      <div className="relative mx-auto flex min-h-[92vh] min-h-[92svh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 md:min-h-[92dvh]">
        <div className="relative z-20 max-w-4xl text-white lg:max-w-3xl xl:max-w-4xl">
          <p className="text-xs font-bold uppercase text-oat md:text-sm">
            Blanquería y hogar
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] min-[430px]:text-6xl md:text-8xl">
            <span className="block md:inline">Blanco Hogar</span>{" "}
            <span className="block whitespace-nowrap md:inline">J & F</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
            Ropa de cama, toallas y detalles textiles para crear ambientes cálidos,
            naturales y preparados para descansar mejor.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Reveal delay={120}>
              <Button to="/tienda">
                Ver catálogo
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
              </Button>
            </Reveal>
            <Reveal delay={240}>
              <Button to="/#contacto" variant="secondary">
                Solicitar asesoramiento
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-milk to-transparent py-12" />
    </section>
  );
}
