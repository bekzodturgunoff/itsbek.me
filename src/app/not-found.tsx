import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent">404</span>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-text sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/en"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-bg transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
      >
        Back home
      </Link>
    </div>
  );
}
