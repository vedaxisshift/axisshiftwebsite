import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-500 text-navy-950 hover:bg-cyan-glow shadow-[0_0_0_1px_rgba(95,215,222,0.25)] hover:shadow-[0_0_24px_rgba(95,215,222,0.35)]",
  outline:
    "border border-line text-ink hover:border-teal-400 hover:text-teal-400",
  ghost: "text-ink/80 hover:text-ink",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = true,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
