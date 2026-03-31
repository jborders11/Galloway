import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "destructive";

const variants: Record<BadgeVariant, string> = {
  default: "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  destructive: "bg-red-100 text-red-800",
};

export function Badge({
  variant = "default",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
