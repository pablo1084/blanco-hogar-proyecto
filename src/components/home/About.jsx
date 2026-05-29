import SectionHeader from "../common/SectionHeader.jsx";
import Reveal from "../common/Reveal.jsx";

const stats = [
  { label: "Productos", value: "80+" },
  { label: "Líneas", value: "6" },
  { label: "Pedido simple", value: "24h" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-linen px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <img
            alt="Cama con textiles claros y detalles naturales"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
            src="/images/about-bedroom.jpg"
          />
          <div className="absolute -bottom-7 right-5 rounded-lg bg-milk p-5 shadow-soft sm:right-10">
            <p className="text-xs font-bold uppercase text-clay">
              Paleta natural
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-cocoa">Beige + salvia</p>
          </div>
        </div>
        <div>
          <SectionHeader kicker="Nuestra propuesta" title="Elegir mejor, descansar más lindo">
            En Blanco Hogar J & F reunimos productos suaves, nobles y fáciles de combinar
            para que cada ambiente se sienta más cálido y personal.
          </SectionHeader>
          <p className="mt-6 leading-8 text-cocoa/70">
            Trabajamos con una selección pensada para acompañar la vida diaria: ropa de cama,
            baño y deco con texturas agradables, tonos serenos y atención cercana.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal className="rounded-lg bg-milk p-5" delay={index * 100} key={stat.label}>
                <p className="font-display text-4xl font-semibold text-cocoa">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase text-cocoa/55">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
