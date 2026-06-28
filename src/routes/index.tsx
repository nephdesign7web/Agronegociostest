import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Compass,
  Handshake,
  Heart,
  Leaf,
  Recycle,
  Lightbulb,
  Bike,
  FlaskConical,
  Flower2,
  PawPrint,
  Sprout,
  Target,
  Telescope,
  TestTube2,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { PROJECTS, BRANDS, WHATSAPP_URL, CONTACT } from "@/data/site";
import heroImg from "@/assets/hero-home.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";
import galeria5 from "@/assets/galeria-5.jpg";
import galeria6 from "@/assets/galeria-6.jpg";
import logoCinde from "@/assets/logo-white-cinde.png";
import logoComercio from "@/assets/logo-white-comercio-exterior.png";
import logoIct from "@/assets/logo-white-ict.png";
import logoProcomer from "@/assets/logo-white-procomer.png";
import logoRelaciones from "@/assets/logo-white-relaciones-exteriores-1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agronegocios CR — Agroinnovación costarricense con valor agregado" },
      {
        name: "description",
        content:
          "Desarrollamos proyectos agrícolas sostenibles, productos con valor agregado y marcas innovadoras que generan bienestar para personas, comunidades y planeta.",
      },
      { property: "og:title", content: "Agronegocios CR — Agroinnovación costarricense" },
      {
        property: "og:description",
        content:
          "Más de 20 años impulsando proyectos agrícolas sostenibles, productos con valor agregado y marcas innovadoras desde Costa Rica.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "+20 años", label: "Impulsando la agroinnovación" },
  { value: "5+ proyectos", label: "Estratégicos desarrollados" },
  { value: "4 marcas", label: "Propias con visión de crecimiento" },
  { value: "100%", label: "Compromiso con la sostenibilidad" },
];

const MARQUEE = [
  "Sin químicos tóxicos",
  "Producción responsable",
  "Eficacia natural",
  "100% nacional",
  "Sin aditivos",
  "Agricultura sostenible",
  "Investigación aplicada",
  "Valor agregado",
];

const ABOUT_CARDS = [
  { icon: Sprout, title: "Innovación agrícola", desc: "Nuevas formas de producir con visión de futuro." },
  { icon: Leaf, title: "Productos naturales", desc: "Ingredientes con valor agregado y bienestar real." },
  { icon: TestTube2, title: "Investigación y desarrollo", desc: "Conocimiento aplicado a cultivos emergentes." },
  { icon: Recycle, title: "Sostenibilidad", desc: "Economía circular y prácticas responsables." },
];

const VALUE_BLOCKS = [
  { icon: Briefcase, title: "Experiencia que genera confianza", desc: "Más de 20 años desarrollando proyectos agrícolas y agroindustriales." },
  { icon: Lightbulb, title: "Innovación aplicada", desc: "Identificamos oportunidades y las convertimos en proyectos viables y escalables." },
  { icon: TrendingUp, title: "Valor agregado", desc: "Transformamos materias primas en productos y marcas diferenciadas." },
  { icon: Leaf, title: "Sostenibilidad", desc: "Prácticas responsables con el ambiente y las futuras generaciones." },
  { icon: Telescope, title: "Visión estratégica", desc: "Analizamos tendencias y mercados para asegurar proyección a largo plazo." },
  { icon: Handshake, title: "Red de colaboración", desc: "Productores, empresas, instituciones y aliados estratégicos." },
];

const TIMELINE = [
  { year: "2000+", text: "Inicio de trayectoria en el sector agrícola." },
  { year: "2005+", text: "Desarrollo de nuevos proyectos agrícolas." },
  { year: "2012+", text: "Investigación en cultivos emergentes y superfoods." },
  { year: "2014+", text: "Desarrollo comercial de nuevas iniciativas." },
  { year: "Hoy", text: "Innovación, marcas y valor agregado con visión de futuro." },
];

const VALUES = ["Innovación", "Compromiso", "Sostenibilidad", "Colaboración", "Integridad"];

const GALLERY = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6];

const INSTITUCIONES = [
  { src: logoCinde,      alt: "CINDE" },
  { src: logoComercio,   alt: "Ministerio de Comercio Exterior" },
  { src: logoIct,        alt: "ICT" },
  { src: logoProcomer,   alt: "PROCOMER" },
  { src: logoRelaciones, alt: "Ministerio de Relaciones Exteriores" },
];

const SOMOS_FEATURES = [
  "Industrialización y valor agregado",
  "Tecnología para procesos especializados",
  "Cadena de pequeños productores",
];

function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? null : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Ver foto ${i + 1}`}
          >
            <img
              src={src}
              alt={`Instalaciones ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/40">
              <ZoomIn className="h-7 w-7 text-primary-foreground opacity-0 drop-shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={images[open]}
            alt={`Foto ${open + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
            {open + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/35 via-primary/45 to-primary/80" />
        </div>

        {/* Marquee badge strip — Natura506 universe */}
        <div className="relative overflow-hidden border-b border-primary-foreground/15 bg-primary/70 backdrop-blur-sm">
          <div className="marquee-track flex w-max gap-10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/90 sm:text-xs">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`${m}-${i}`} className="flex items-center gap-3 pr-2">
                <Sprout className="h-3.5 w-3.5 text-accent" />
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="container-page relative py-16 text-primary-foreground md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft backdrop-blur">
                <span
                  className="inline-flex h-5 w-5 overflow-hidden rounded-full border border-white/40 shadow-sm ring-1 ring-black/10"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="20" height="4" y="0" fill="#2e4593" />
                    <rect width="20" height="3" y="4" fill="#f2f2f2" />
                    <rect width="20" height="6" y="7" fill="#f42525" />
                    <rect width="20" height="3" y="13" fill="#f2f2f2" />
                    <rect width="20" height="4" y="16" fill="#2e4593" />
                  </svg>
                </span>
                Desde Costa Rica
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                Agroinnovación
                <span className="block text-accent">costarricense</span>
                <span className="block">con valor agregado.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Desarrollamos proyectos agrícolas sostenibles, productos con valor agregado y
                marcas innovadoras que generan bienestar para las personas, las comunidades y el planeta.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/proyectos"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary shadow-elevated transition-transform hover:scale-[1.02]"
                >
                  Conocer proyectos <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Contactar por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 text-center backdrop-blur-md"
              >
                <p className="font-display text-2xl font-bold text-accent-soft sm:text-3xl">{s.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="*Innovación agrícola* costarricense."
            description="Agronegocios CR nace con el propósito de transformar materias primas agrícolas en productos de alto valor agregado, desarrollando proyectos sostenibles que generan oportunidades para productores, emprendedores e industrias."
          />
          <Reveal delay={100} className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nuestra experiencia combina investigación, desarrollo de productos, agroindustria
              y comercialización para transformar materias primas en soluciones con potencial
              de crecimiento local e internacional.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ABOUT_CARDS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-border/70 bg-card p-5 shadow-card-soft">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 font-display text-base font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/emprendedor"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Conoce más sobre nosotros <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SOMOS */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container-page relative text-primary-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <Leaf className="h-3.5 w-3.5" /> Conócenos
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                ¡Somos <span className="text-accent">AgroNegocios</span>!
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Agronegocios Costa Rica es una organización agrocomercial enfocada en el desarrollo de proyectos productivos del agro, con su posterior industrialización y generación de valor agregado.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
                Nuestro trabajo conecta investigación, pequeños productores, tecnología de proceso y desarrollo comercial para crear productos con proyección nacional e internacional.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {SOMOS_FEATURES.map((f) => (
                  <span key={f} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={260}>
            <GalleryLightbox images={GALLERY} />
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 border-t border-primary-foreground/15 pt-12">
              <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/50">
                Respaldados e impulsados por
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {INSTITUCIONES.map((inst) => (
                  <img
                    key={inst.alt}
                    src={inst.src}
                    alt={inst.alt}
                    className="h-8 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 sm:h-10"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative overflow-hidden bg-secondary/60 py-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-page relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Nuestros proyectos"
              title="Proyectos con *impacto*."
              description="Iniciativas que combinan investigación, sostenibilidad e innovación para generar oportunidades reales en el sector agrícola."
              align="left"
              className="max-w-2xl"
            />
            <Link
              to="/proyectos"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* Featured project */}
            <Reveal className="lg:col-span-7">
              <Link
                to="/proyectos/$slug"
                params={{ slug: PROJECTS[0].slug }}
                className="group relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl sm:min-h-[28rem] bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <img
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent" />
                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Proyecto destacado
                </span>
                <div className="relative p-8 text-background md:p-10">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-background/70">01 — Cultivo</span>
                  <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{PROJECTS[0].name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-background/85">{PROJECTS[0].short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Ver proyecto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* List of remaining projects */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              {PROJECTS.slice(1).map((p, i) => (
                <Reveal key={p.slug} delay={(i + 1) * 80}>
                  <Link
                    to="/proyectos/$slug"
                    params={{ slug: p.slug }}
                    className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-3 shadow-card-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
                  >
                    <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1 py-1 pr-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                          {String(i + 2).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{p.short}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Nuestras marcas"
          title="Nuestras *marcas*."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {BRANDS.map((b, i) => {
            const BrandIcon =
              b.slug === "natura-506"
                ? Flower2
                : b.slug === "biobike"
                  ? Bike
                  : b.slug === "natura-506-pets"
                    ? PawPrint
                    : FlaskConical;
            return (
            <Reveal key={b.slug} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-hero text-primary-foreground shadow-elevated ring-1 ring-primary/20">
                  <BrandIcon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{b.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.tagline}</p>
                <Link
                  to="/marcas"
                  hash={b.slug}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary"
                >
                  {b.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="Lo que nos hace *diferentes*."
            description="Combinamos experiencia, innovación y compromiso para transformar el sector agrícola con proyectos que generan impacto real."
            align="center"
            tone="light"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_BLOCKS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-7 backdrop-blur">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-foreground/15 text-accent-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/80">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER + TIMELINE */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* LEFT — intro */}
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Conoce al fundador"
                title="*Pasión* y experiencia."
                description="Más de dos décadas dedicadas a la investigación, los proyectos agroindustriales y los productos naturales — con una visión enfocada en la innovación y la sostenibilidad."
              />
              <Reveal delay={100}>
                <div className="mt-10 flex items-baseline gap-4">
                  <span className="font-display text-5xl font-semibold leading-none text-accent sm:text-6xl">
                    20<span className="text-accent/60">+</span>
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    años de trayectoria
                  </span>
                </div>
                <Link
                  to="/emprendedor"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Conoce al emprendedor <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            {/* RIGHT — trayectoria minimal list */}
            <ol className="relative space-y-10 border-l border-border pl-8">
              {TIMELINE.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 70} className="relative">
                  <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-secondary/40" />
                  <p className="font-display text-3xl font-semibold text-primary">{t.year}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MISSION + VISION + VALUES */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Misión",
              text: "Impulsar el desarrollo de proyectos agrícolas innovadores mediante investigación, sostenibilidad y generación de valor agregado, contribuyendo al crecimiento de productores, emprendedores y empresas.",
            },
            {
              icon: Compass,
              title: "Visión",
              text: "Ser un referente en agroinnovación y desarrollo sostenible en Costa Rica y Latinoamérica, promoviendo soluciones que transformen recursos agrícolas en oportunidades de impacto económico, social y ambiental.",
            },
            {
              icon: Heart,
              title: "Valores",
              text: VALUES.join(" · "),
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="h-full rounded-3xl bg-card p-8 shadow-card-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Hablemos"
              title="Tu próximo *proyecto*."
              description="Ya sea que busques desarrollar un cultivo especializado, crear un producto con valor agregado o explorar nuevas oportunidades de negocio, estaremos encantados de conversar contigo."
            />
            <Reveal delay={120} className="mt-8 space-y-3 rounded-3xl border border-border/70 bg-card p-6 text-sm">
              <p className="font-display text-base font-semibold text-primary">Contáctanos directamente</p>
              <p className="text-muted-foreground">{CONTACT.address}</p>
              <p className="text-muted-foreground">{CONTACT.phones.join(" · ")}</p>
              <p className="text-muted-foreground">{CONTACT.email}</p>
              <p className="text-muted-foreground">{CONTACT.hours}</p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="rounded-3xl bg-card p-6 shadow-card-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
