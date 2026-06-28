import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Leaf,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import type { ProjectContent } from "@/data/site";
import { WHATSAPP_URL } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function ProjectPageTemplate({ data }: { data: ProjectContent }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <img src={data.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/55 to-transparent" aria-hidden />
        <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <Leaf className="h-3.5 w-3.5" /> Proyecto
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {data.name}:{" "}
              <span className="text-accent-soft">{data.heroTitle}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {data.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Contactar <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4" /> Solicitar información
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="hidden lg:block">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-primary-foreground/20">
                <img
                  src={data.image}
                  alt={data.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 text-foreground shadow-elevated sm:block">
                <p className="font-display text-3xl font-semibold text-primary">+10</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">años de experiencia</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Band */}
      <section className="border-y border-border/60 bg-secondary/60">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
          {data.band.map((b, i) => (
            <span key={b} className="flex items-center gap-3">
              {i > 0 ? <span className="h-1 w-1 rounded-full bg-accent" /> : null}
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-start">
        <SectionHeading eyebrow="Visión general" title={data.overviewTitle} />
        <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {data.overviewParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Experience */}
      <section className="bg-secondary/50">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-card-soft">
              <img src={data.image} alt={data.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Nuestra experiencia" title={data.experienceTitle} />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.experienceParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Beneficios"
          title="Por qué apostar por este *cultivo*"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="bg-primary/[0.04]">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Aplicaciones" title="Usos y *oportunidades*" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <article className="h-full rounded-3xl bg-card p-6 shadow-card-soft">
                  <p className="font-display text-lg font-semibold text-primary">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Impacto" title="Cómo generamos *valor*" align="center" />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3">
          {data.impact.map((it, i) => (
            <Reveal key={it.title} delay={i * 50} as="li">
              <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-card-soft">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{it.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero px-8 py-14 text-primary-foreground sm:px-14 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
              <div>
                <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {data.ctaTitle}
                </h3>
                <p className="mt-3 max-w-2xl text-primary-foreground/85">{data.ctaText}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp
                </a>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contactar <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}