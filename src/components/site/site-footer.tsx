import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { CONTACT, PROJECTS, BRANDS, WHATSAPP_URL } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm text-primary-foreground/75">
            Impulsamos proyectos agrícolas innovadores, sostenibles y con valor agregado,
            transformando recursos en oportunidades reales para Costa Rica y Latinoamérica.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Proyectos">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link
                to="/proyectos/$slug"
                params={{ slug: p.slug }}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Marcas">
          {BRANDS.map((b) => (
            <li key={b.slug}>
              <Link
                to="/marcas"
                hash={b.slug}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {b.name}
              </Link>
            </li>
          ))}
          <FooterLink to="/marcas">Todas las marcas</FooterLink>
        </FooterCol>

        <FooterCol title="Contáctanos">
          <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{CONTACT.address}</span>
          </li>
          {CONTACT.phones.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary-foreground">
                {p}
              </a>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {CONTACT.whatsapp}
            </a>
          </li>
          <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-foreground">
              {CONTACT.email}
            </a>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {year} Agronegocios CR. Web creada por Walter Wonder.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary-foreground">Política de privacidad</a>
            <a href="#" className="hover:text-primary-foreground">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-base font-semibold text-primary-foreground">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: "/marcas" | "/preguntas-frecuentes" | "/contacto" | "/emprendedor" | "/proyectos" | "/"; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
        {children}
      </Link>
    </li>
  );
}
