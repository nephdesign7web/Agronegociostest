import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPageTemplate } from "@/components/site/project-page-template";
import { PROJECT_CONTENT, type ProjectSlug } from "@/data/site";

const VALID: ProjectSlug[] = ["sacha-inchi", "higuerilla", "moringa", "cacao", "luffa"];

function isProjectSlug(slug: string): slug is ProjectSlug {
  return (VALID as string[]).includes(slug);
}

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    if (!isProjectSlug(params.slug)) throw notFound();
    return { project: PROJECT_CONTENT[params.slug] };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} — Proyecto · Agronegocios CR` },
        { name: "description", content: p.heroSubtitle },
        { property: "og:title", content: `${p.name} — Agronegocios CR` },
        { property: "og:description", content: p.heroSubtitle },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  component: Page,
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
});

function Page() {
  const { project } = Route.useLoaderData();
  return <ProjectPageTemplate data={project} />;
}

function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl font-semibold">Proyecto no encontrado</h1>
      <p className="mt-3 text-muted-foreground">El proyecto que buscas no existe.</p>
    </div>
  );
}

function ErrorView() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-3xl font-semibold">Algo salió mal</h1>
      <p className="mt-3 text-muted-foreground">Intenta de nuevo en unos minutos.</p>
    </div>
  );
}