import { Sprout } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight",
        tone === "light" ? "text-primary-foreground" : "text-primary",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-xl",
          tone === "light" ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary text-primary-foreground",
        )}
      >
        <Sprout className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        Agronegocios
        <span className="ml-1 font-sans text-xs font-medium tracking-[0.18em] opacity-70">CR</span>
      </span>
    </Link>
  );
}