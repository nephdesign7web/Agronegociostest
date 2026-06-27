import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { CONTACT, WHATSAPP_URL } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Agronegocios CR" },
      {
        name: "description",
        content:
          "Hablemos de tu próximo proyecto agrícola. Atención personalizada, respuesta rápida y asesoría especializada.",
      },
      { property: "og:title", content: "Contacto — Agronegocios CR" },
      {
        property: "og:description",
        content:
          "Estamos listos para escuchar tu idea y trabajar juntos en proyectos sostenibles con valor agregado.",
      },
    ],
  }),
  component: Page,
});

const INDICATORS = [
  "Respuesta rápida",
  "Atención personalizada",
  "Confidencialidad garantizada",
  "Asesoría especializada",
];

const COMMITMENT = [
  { icon: Lightbulb, title: "Innovación constante", desc: "Buscamos nuevas oportunidades para generar valor." },
  { icon: Leaf, title: "Sostenibilidad", desc: "Promovemos prácticas responsables con el ambiente." },
  { icon: TrendingUp, title: "Valor agregado", desc: "Transformamos materias primas en productos diferenciados." },
  { icon: Handshake, title: "Trabajo colaborativo", desc: "Alianzas para lograr resultados excepcionales." },
];

function Page() {
  return (
    <>
      <section className="gradient-soft border-b border-border/60">
        <div className="container-page py-20 text-center md:py-28">
          <Reveal className="mx-auto max-w-fit">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <MessageCircle className="h-3.5 w-3.5" /> Escríbenos
            </span>
          </Reveal>
          <SectionHeading
            className="mt-6"
            align="center"
            title="Tu próximo *proyecto*."
            description="Estamos listos para escuchar tu idea, resolver tus dudas y trabajar juntos en proyectos agrícolas innovadores, sostenibles y con valor agregado."
          />
          <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-2">
            {INDICATORS.map((i) => (
              <span
                key={i}
                className="rounded-full border border-primary/15 bg-card px-3.5 py-1.5 text-xs font-medium text-primary"
              >
                {i}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-card-soft sm:p-10">
              <p className="font-display text-2xl font-semibold">Completa el formulario</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Envíanos un mensaje y nos pondremos en contacto contigo.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="flex h-full flex-col gap-6">
            <Reveal delay={80}>
              <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-elevated">
                <p className="font-display text-xl font-semibold">Información de contacto</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                    <div>
                      <p className="font-semibold">Nuestra ubicación</p>
                      <p className="text-primary-foreground/80">{CONTACT.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                    <div>
                      <p className="font-semibold">Llámanos</p>
                      {CONTACT.phones.map((p) => (
                        <p key={p} className="text-primary-foreground/80">
                          <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 underline-offset-4 hover:underline"
                      >
                        {CONTACT.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                    <div>
                      <p className="font-semibold">Correo electrónico</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-primary-foreground/80">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                    <div>
                      <p className="font-semibold">Horario de atención</p>
                      <p className="text-primary-foreground/80">Lunes a viernes · 8:00 a.m. – 5:00 p.m.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft">
                <p className="font-display text-lg font-semibold">¿Prefieres escribirnos por WhatsApp?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Haz clic en el botón y conversemos de inmediato.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Escríbenos por WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="overflow-hidden rounded-3xl border border-border/70 shadow-card-soft">
                <iframe
                  title="Mapa La Uruca, San José"
                  src="https://www.google.com/maps?q=La+Uruca,San+Jose,Costa+Rica&output=embed"
                  loading="lazy"
                  className="block h-64 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nuestro compromiso"
            title="Ideas con *impacto real*."
            description="Creemos en el potencial de la agricultura para generar bienestar, oportunidades y un futuro más sostenible."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENT.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <article className="h-full rounded-3xl bg-card p-6 shadow-card-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 font-display text-base font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}