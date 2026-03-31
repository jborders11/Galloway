export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6">
      <div>
        <h2 className="text-sm text-[var(--muted-foreground)]">
          Golf Course Revenue Optimization
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--muted-foreground)]">
          Demo Course
        </span>
      </div>
    </header>
  );
}
