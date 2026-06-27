import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { PROJECTS } from "@/data/site";

export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    meta: [
      { title: "Proyectos — Agronegocios CR" },
      {
        name: "description",
        content:
          "Conoce los cultivos y proyectos que desarrollamos: Sacha Inchi, Higuerilla, Moringa, Cacao y Luffa.",
      },
      { property: "og:title", content: "Proyectos — Agronegocios CR" },
      {
        property: "og:description",
        content:
          "Iniciativas que combinan investigación, sostenibilidad e innovación en el sector agrícola costarricense.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="gradient-soft border-b border-border/60">
        <div className="container-page py-20 text-center md:py-28">
          <Reveal className="mx-auto max-w-fit">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Leaf className="h-3.5 w-3.5" /> Proyectos
            </span>
          </Reveal>
          <SectionHeading
            className="mt-6"
            align="center"
            title="Proyectos que generan *impacto*."
            description="Cinco iniciativas que combinan investigación, sostenibilidad e innovación para crear oportunidades de crecimiento en distintos sectores productivos."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 60}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <Link
                to="/proyectos/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ver proyecto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}