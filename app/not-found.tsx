import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="text-center">
        <p className="text-7xl font-bold tracking-tight text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
          This page took a different path
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-500 dark:text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link href="/contact" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
