"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const errorDescription =
    process.env.NODE_ENV === "development" ? error.message || "Tente novamente em alguns instantes." : "Tente novamente em alguns instantes.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Erro inesperado</p>
        <h1 className="mb-4 font-display text-4xl font-bold">Algo saiu do esperado</h1>
        <p className="mb-6 text-lg text-muted-foreground">{errorDescription}</p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
