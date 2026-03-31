import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
  outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--accent)]",
  ghost: "hover:bg-[var(--accent)]",
};

export function Button({
  variant = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
