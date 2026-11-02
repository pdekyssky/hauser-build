import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-28">
      <div className="container-site">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          404
        </p>
        <h1 className="mt-4 font-display text-display-md font-semibold text-ink">
          Stránka sa nenašla.
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          Odkaz môže byť neplatný alebo stránka už neexistuje.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
        >
          Späť na úvod
        </Link>
      </div>
    </section>
  );
}
