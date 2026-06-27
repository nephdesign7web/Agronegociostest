import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "./logo";
import { PROJECTS, BRANDS } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/" as const, label: "Inicio" },
  { to: "/emprendedor" as const, label: "El Emprendedor" },
];

const SECONDARY_LINKS = [
  { to: "/preguntas-frecuentes" as const, label: "Preguntas Frecuentes" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all",
        scrolled
          ? "border-border/60 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/40 backdrop-blur",
      )}
    >
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <NavDropdown label="Proyectos">
            <DropdownLink to="/proyectos">Todos los proyectos</DropdownLink>
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to="/proyectos/$slug"
                params={{ slug: p.slug }}
                className="block rounded-xl px-3 py-2 text-sm text-foreground/85 hover:bg-primary-soft hover:text-primary"
              >
                {p.name}
              </Link>
            ))}
          </NavDropdown>

          <NavDropdown label="Marcas">
            <DropdownLink to="/marcas">Todas las marcas</DropdownLink>
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                to="/marcas"
                hash={b.slug}
                className="block rounded-xl px-3 py-2 text-sm text-foreground/85 hover:bg-primary-soft hover:text-primary"
              >
                {b.name}
              </Link>
            ))}
          </NavDropdown>

          {SECONDARY_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contacto"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card-soft transition-all hover:bg-primary/90 hover:shadow-elevated"
          >
            Escríbenos
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto bg-background">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-1 px-1 pb-8">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-primary-soft hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}

              <Accordion type="multiple" className="w-full">
                <AccordionItem value="projects" className="border-none">
                  <AccordionTrigger className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:no-underline">
                    Proyectos
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col gap-0.5 pl-3">
                      <Link
                        to="/proyectos"
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary"
                      >
                        Todos los proyectos
                      </Link>
                      {PROJECTS.map((p) => (
                        <Link
                          key={p.slug}
                          to="/proyectos/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="brands" className="border-none">
                  <AccordionTrigger className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:no-underline">
                    Marcas
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col gap-0.5 pl-3">
                      <Link
                        to="/marcas"
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary"
                      >
                        Todas las marcas
                      </Link>
                      {BRANDS.map((b) => (
                        <Link
                          key={b.slug}
                          to="/marcas"
                          hash={b.slug}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary"
                        >
                          {b.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {SECONDARY_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-primary-soft hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
              >
                Escríbenos
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors group-hover:bg-primary-soft group-hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 rounded-2xl border border-border/70 bg-card p-2 opacity-0 shadow-elevated transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function DropdownLink({ to, children }: { to: "/proyectos" | "/marcas"; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block rounded-xl px-3 py-2 text-sm font-medium text-primary hover:bg-primary-soft"
    >
      {children}
    </Link>
  );
}