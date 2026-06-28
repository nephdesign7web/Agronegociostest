import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

/**
 * Renders the title. Any text wrapped in *asterisks* is highlighted in lime
 * with an underline accent — Natura506 universe treatment.
 */
function renderTitle(title: string, light: boolean) {
  const parts = title.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span
        key={i}
        className={cn(light ? "text-accent-soft" : "text-accent")}
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: Props) {
  const center = align === "center";
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        center && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur",
            light
              ? "border-accent/40 bg-primary-foreground/10 text-accent-soft"
              : "border-accent/30 bg-primary-soft text-primary",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              "bg-accent",
            )}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
          light ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {renderTitle(title, light)}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}