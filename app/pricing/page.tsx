import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible engagement models from Selinyx — fixed-scope MVPs, monthly dedicated teams, and custom enterprise contracts. Transparent pricing, no surprises.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Simple plans that <span className="text-gradient">scale with you</span>
          </>
        }
        description="Choose the engagement model that fits your stage. Every plan includes senior talent, transparent communication, and code you fully own."
      />

      <section className="pb-12 md:pb-16">
        <div className="container-x grid items-stretch gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all ${
                  tier.highlighted
                    ? "border-transparent bg-brand-gradient text-white shadow-soft-lg lg:scale-[1.03]"
                    : "border-ink-200/60 bg-white dark:border-white/10 dark:bg-white/[0.03]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most popular
                  </span>
                )}

                <h3
                  className={`text-lg font-semibold ${
                    tier.highlighted ? "text-white" : "text-ink-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.highlighted ? "text-white" : "text-ink-900 dark:text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span
                      className={`text-sm font-medium ${
                        tier.highlighted ? "text-white/80" : "text-ink-500 dark:text-ink-400"
                      }`}
                    >
                      {tier.cadence}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/85" : "text-ink-500 dark:text-ink-300"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          tier.highlighted
                            ? "bg-white/20 text-white"
                            : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={
                          tier.highlighted ? "text-white/90" : "text-ink-600 dark:text-ink-300"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-white text-brand-700 hover:brightness-95"
                      : "btn-primary"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="container-x mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
          Need something different? We tailor engagements to your exact needs —{" "}
          <Link href="/contact" className="font-semibold text-brand-600 dark:text-brand-300">
            let&apos;s talk
          </Link>
          .
        </p>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
