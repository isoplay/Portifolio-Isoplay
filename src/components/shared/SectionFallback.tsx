export function SectionFallback() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="h-4 w-28 animate-pulse rounded-full bg-muted" />
        <div className="h-10 w-full max-w-xl animate-pulse rounded-full bg-muted" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-48 animate-pulse rounded-3xl bg-muted" />
          <div className="h-48 animate-pulse rounded-3xl bg-muted" />
        </div>
      </div>
    </section>
  );
}
