import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <img src={logoImg} alt="Agronegocios CR" className="h-10 w-auto object-contain" />
    </Link>
  );
}