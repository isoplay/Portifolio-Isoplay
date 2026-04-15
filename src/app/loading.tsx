export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="h-8 w-40 animate-pulse rounded-full bg-muted" />
        <div className="h-20 w-full max-w-3xl animate-pulse rounded-3xl bg-muted" />
        <div className="h-6 w-full max-w-2xl animate-pulse rounded-full bg-muted" />
      </div>
    </main>
  );
}
