import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { BRANDS, WHATSAPP_URL } from "@/data/site";
import { cn } from "@/lib/utils";
import natura506Logo from "@/assets/logo-natura-506.png";
import biobikeLogo from "@/assets/logo-biobike.png";
import natura506PetsLogo from "@/assets/logo-natura-506-pets.png";
import natura506GuatemalaLogo from "@/assets/logo-natura-506-guatemala.png";

const BRAND_LOGOS: Record<string, string> = {
  "natura-506": natura506Logo,
  "biobike": biobikeLogo,
  "natura-506-pets": natura506PetsLogo,
  "natura-506-guatemala": natura506GuatemalaLogo,
};

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas — Agronegocios CR" },
      {
        name: "description",
        content:
          "Natura 506, BioBike, Natura 506 Pets y Natura 506 Guatemala: marcas desarrolladas por Agronegocios CR con identidad propia para distintos mercados.",
      },
      { property: "og:title", content: "Marcas — Agronegocios CR" },
      {
        property: "og:description",
        content:
          "Transformamos investigación y desarrollo agrícola en productos y soluciones con identidad propia.",
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
              <Leaf className="h-3.5 w-3.5" /> Marcas
            </span>
          </Reveal>
          <SectionHeading
            className="mt-6"
            align="center"
            title="Marcas con *identidad*."
            description="Transformamos conocimiento, investigación y desarrollo agrícola en productos y soluciones con identidad propia para diferentes mercados."
          />
        </div>
      </section>

      <section className="container-page space-y-20 py-20 md:space-y-28 md:py-28">
        {BRANDS.map((b, i) => (
          <article
            key={b.slug}
            id={b.slug}
            className="scroll-mt-28 grid items-stretch gap-10 lg:grid-cols-2"
          >
            <Reveal className={cn("h-full", i % 2 === 1 && "lg:order-2")}>
              <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-8 overflow-hidden rounded-[2rem] gradient-hero p-10 text-primary-foreground shadow-elevated sm:p-14">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary-foreground/5 blur-2xl" aria-hidden />
                {/* Logo en contenedor blanco */}
                <div className="relative flex items-center justify-center rounded-2xl bg-white px-10 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.22)]">
                  <img
                    src={BRAND_LOGOS[b.slug]}
                    alt={`Logo ${b.name}`}
                    className="h-16 w-auto object-contain sm:h-20"
                  />
                </div>
                {/* Nombre y tagline */}
                <div className="relative text-center">
                  <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{b.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{b.tagline}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className={cn("flex h-full flex-col justify-center", i % 2 === 1 && "lg:order-1")}>
              <SectionHeading eyebrow={`Marca propia · 0${i + 1}`} title={b.tagline} />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{b.description}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {b.benefits.map((bn) => (
                  <li
                    key={bn}
                    className="flex items-center gap-2.5 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-primary"
                  >
                    <Check className="h-4 w-4" /> {bn}
                  </li>
                ))}
              </ul>
              <a
                href={b.url ?? WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {b.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </article>
        ))}
      </section>
    </>
  );
}