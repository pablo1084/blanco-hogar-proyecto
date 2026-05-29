import { services } from "../../data/services.js";
import Reveal from "../common/Reveal.jsx";
import SectionHeader from "../common/SectionHeader.jsx";

export default function Services() {
  return (
    <section className="bg-milk px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader align="center" kicker="Servicios" title="Una compra simple y cuidada">
          Te acompañamos para elegir medidas, colores y combinaciones que hagan sentir tu
          casa más cómoda y armoniosa.
        </SectionHeader>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                as="article"
                className="rounded-lg border border-cocoa/10 bg-white p-7"
                delay={index * 110}
                key={service.title}
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sage/45 text-cocoa">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cocoa">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-cocoa/65">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
