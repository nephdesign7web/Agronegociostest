import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WHATSAPP_URL } from "@/data/site";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — Agronegocios CR" },
      {
        name: "description",
        content:
          "Respuestas rápidas sobre nuestros proyectos, productos, servicios y formas de contacto.",
      },
      { property: "og:title", content: "Preguntas frecuentes — Agronegocios CR" },
      {
        property: "og:description",
        content:
          "Encuentra información sobre cómo trabajamos, dónde estamos y cómo solicitar asesoría.",
      },
    ],
  }),
  component: Page,
});

const FAQS = [
  {
    q: "¿Qué tipo de productos procesa Agronegocios CR?",
    a: "Procesamos y desarrollamos productos derivados de cultivos especializados, productos naturales, suplementos, materias primas agrícolas y soluciones con valor agregado.",
  },
  {
    q: "¿Dónde está ubicada la empresa?",
    a: "Estamos ubicados en La Uruca, San José, Costa Rica.",
  },
  {
    q: "¿Dónde puedo encontrar sus productos?",
    a: "Puedes contactarnos directamente para conocer puntos de venta, disponibilidad y opciones de compra.",
  },
  {
    q: "¿Puedo comprar directamente?",
    a: "Sí, puedes comunicarte con nosotros por teléfono, correo electrónico o WhatsApp para recibir más información.",
  },
  {
    q: "¿Qué horario de atención manejan?",
    a: "Lunes a viernes de 8:00 a.m. a 5:00 p.m.",
  },
  {
    q: "¿Agronegocios CR desarrolla proyectos personalizados?",
    a: "Sí, trabajamos con productores, emprendedores, empresas e instituciones interesadas en desarrollar proyectos agrícolas, agroindustriales o productos con valor agregado.",
  },
  {
    q: "¿Trabajan con productos naturales?",
    a: "Sí, una parte importante de nuestro enfoque está relacionada con productos naturales, bienestar, ingredientes funcionales y desarrollo sostenible.",
  },
  {
    q: "¿Puedo solicitar asesoría?",
    a: "Sí, puedes escribirnos mediante el formulario de contacto o por WhatsApp para conversar sobre tu proyecto.",
  },
];

function Page() {
  return (
    <>
      <section className="gradient-soft border-b border-border/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <HelpCircle className="h-3.5 w-3.5" /> FAQ
            </span>
          </Reveal>
          <SectionHeading
            className="mt-6"
            title="Preguntas *frecuentes*."
            description="Encuentra respuestas rápidas sobre nuestros proyectos, productos, servicios y formas de contacto."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border/70 bg-card px-5 shadow-card-soft data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={150} className="mt-14 rounded-3xl gradient-hero p-8 text-primary-foreground shadow-elevated sm:p-10">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="mt-2 text-primary-foreground/80">
              Escríbenos directamente y te responderemos lo antes posible.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
              >
                <WhatsAppIcon className="h-4 w-4" /> Escríbenos por WhatsApp
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Ir al formulario
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}