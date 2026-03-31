"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Tee Sheet", href: "/tee-sheet", icon: "⛳" },
  { name: "Membership", href: "/membership", icon: "👥" },
  { name: "Recommendations", href: "/recommendations", icon: "💡" },
  { name: "Import Data", href: "/import", icon: "📁" },
  { name: "Settings", href: "/settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[var(--sidebar-width)] border-r border-[var(--border)] bg-[var(--card)]">
      <div className="flex h-16 items-center gap-2 border-b border-[var(--border)] px-6">
        <span className="text-2xl">🏌️</span>
        <h1 className="text-xl font-bold text-[var(--primary)]">Galloway</h1>
      </div>
      <nav className="space-y-1 p-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
