import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Beaker,
  Compass,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  Sprout,
  Store,
  Wheat,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WHATSAPP_URL } from "@/data/site";
import heroImg from "@/assets/hero-emprendedor.jpg";

export const Route = createFileRoute("/emprendedor")({
  head: () => ({
    meta: [
      { title: "El Emprendedor — Agronegocios CR" },
      {
        name: "description",
        content:
          "Más de 20 años de innovación, experiencia y visión para transformar la agricultura costarricense.",
      },
      { property: "og:title", content: "El Emprendedor — Agronegocios CR" },
      {
        property: "og:description",
        content:
          "Una trayectoria dedicada a la investigación, el desarrollo de proyectos agrícolas y la creación de productos con valor agregado.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Page,
});

const AREAS = [
  { icon: Wheat, title: "Cultivos especializados" },
  { icon: Beaker, title: "Agroindustria y transformación" },
  { icon: Recycle, title: "Sostenibilidad y economía circular" },
  { icon: Lightbulb, title: "Innovación aplicada" },
  { icon: Globe, title: "Desarrollo de mercados" },
  { icon: Sprout, title: "Emprendimiento agrícola" },
  { icon: Compass, title: "Investigación y desarrollo" },
  { icon: Store, title: "Creación de marcas y productos" },
];

const TIMELINE = [
  { year: "2000+", text: "Inicio de trayectoria en el sector agrícola." },
  { year: "2005+", text: "Participación en proyectos de innovación y desarrollo productivo." },
  { year: "2010+", text: "Exploración de nuevos cultivos y oportunidades de mercado." },
  { year: "2012+", text: "Investigación aplicada en cultivos emergentes." },
  { year: "2014+", text: "Desarrollo comercial de nuevas iniciativas agrícolas." },
  { year: "Hoy", text: "Impulsando proyectos, marcas y oportunidades sostenibles." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img src={heroImg} alt="" className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/30" />
        </div>
        <div className="container-page relative py-24 text-primary-foreground md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <Leaf className="h-3.5 w-3.5" /> El emprendedor
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Innovación, experiencia y visión para
                <span className="block text-accent-soft">transformar la agricultura.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Durante más de dos décadas, hemos explorado nuevas oportunidades para generar valor
                agregado, impulsar la sostenibilidad y desarrollar proyectos que contribuyan al
                crecimiento del sector agrícola.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex justify-center">
                <Link
                  to="/proyectos"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary shadow-elevated transition-transform hover:scale-[1.02]"
                >
                  Conocer nuestros proyectos <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-4">
            {[
              { v: "+20 años", l: "de experiencia" },
              { v: "5", l: "proyectos estratégicos" },
              { v: "3", l: "marcas desarrolladas" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-center backdrop-blur">
                <p className="font-display text-2xl font-semibold sm:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs text-primary-foreground/80 sm:text-sm">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Trayectoria" title="Impulsada por la *innovación*." align="center" />
        <Reveal delay={100} className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            La agricultura siempre ha representado mucho más que la producción de materias primas.
            A lo largo de los años, el enfoque ha sido identificar oportunidades, desarrollar nuevas
            iniciativas y transformar recursos agrícolas en productos, marcas y modelos de negocio
            con potencial de crecimiento.
          </p>
          <p>
            Esta visión ha permitido participar en proyectos relacionados con cultivos especializados,
            agroindustria, biocombustibles, productos naturales y emprendimientos innovadores,
            promoviendo soluciones sostenibles para diversos sectores productivos.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page grid items-stretch gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Filosofía"
            title="Agricultura, *motor de desarrollo*."
            description="La innovación ocurre cuando el conocimiento, la investigación y la experiencia se convierten en oportunidades reales para las personas, las comunidades y las empresas."
            className="self-center"
          />
          <Reveal delay={120} className="h-full">
            <blockquote className="relative flex h-full flex-col justify-center rounded-[2rem] bg-primary p-10 text-primary-foreground shadow-elevated">
              <Quote className="absolute -top-6 left-8 h-12 w-12 rounded-2xl bg-accent p-2 text-primary-foreground" />
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                Nuestro compromiso es impulsar iniciativas que generen impacto económico,
                social y ambiental positivo.
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
                — Agronegocios CR
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Áreas de experiencia"
          title="Enfoque *integral*."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 50}>
              <article className="h-full rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="mt-5 font-display text-base font-semibold">{title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Línea de tiempo"
            title="Construyendo *oportunidades*."
            align="center"
          />
          <Reveal delay={120} className="mt-14">
            <ol className="relative mx-auto max-w-3xl space-y-7 border-l-2 border-dashed border-accent/40 pl-8">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[42px] top-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-card-soft">
                    <Sprout className="h-4 w-4" />
                  </span>
                  <p className="font-display text-xl font-semibold text-primary">{t.year}</p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Visión de futuro"
            title="Futuro *sostenible*."
            description="La agricultura del futuro requerirá innovación, sostenibilidad y capacidad de adaptación. Seguimos trabajando para desarrollar proyectos que generen valor agregado, fortalezcan la competitividad y contribuyan al crecimiento de nuevas oportunidades en Costa Rica y Latinoamérica."
            className="self-center"
          />
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-[2rem] border border-border/70 bg-card p-10 shadow-card-soft">
              <Handshake className="h-10 w-10 text-accent" />
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-foreground">
                La verdadera innovación agrícola consiste en transformar recursos en oportunidades
                que mejoren la vida de las personas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero px-8 py-14 text-primary-foreground sm:px-14 sm:py-16">
            <div className="grid gap-8 text-center lg:grid-cols-1">
              <div className="mx-auto max-w-2xl">
                <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  ¿Tienes una idea o proyecto agrícola?
                </h3>
                <p className="mt-3 text-primary-foreground/85">
                  Conversemos sobre cómo convertirlo en una oportunidad de crecimiento,
                  innovación y valor agregado.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
                >
                  Conversemos <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/proyectos"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Ver proyectos
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}