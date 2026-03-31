import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

export const metadata: Metadata = {
  title: "Galloway — Golf Revenue Optimization",
  description:
    "Find revenue gaps in your tee sheet and membership data. Get actionable recommendations to optimize pricing and utilization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="ml-[var(--sidebar-width)]">
          <TopBar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
