"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { heroCards, technologies } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

const cardPositions = [
  "left-0 top-12",
  "right-0 top-2",
  "left-4 bottom-10",
  "right-2 bottom-20",
  "left-1/2 top-0 -translate-x-1/2",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Left: copy */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur dark:border-brand-400/20 dark:bg-white/5 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to Selinyx
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            We Build Digital Solutions That Drive{" "}
            <span className="text-gradient">Real Growth</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300"
          >
            Transforming ideas into scalable software, AI-powered products, and digital
            experiences. From strategy to execution, Selinyx delivers solutions that create
            lasting impact.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-white">
                <Play className="h-3 w-3 fill-current" />
              </span>
              View Portfolio
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <p className="text-sm font-medium text-ink-400 dark:text-ink-400">
              Trusted by 200+ businesses worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-sm font-semibold text-ink-400 transition-colors hover:text-brand-600 dark:text-ink-500 dark:hover:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: visual with floating cards */}
        <div className="relative mx-auto hidden h-[30rem] w-full max-w-lg lg:block">
          {/* Central orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 animate-float rounded-[2.5rem] bg-brand-gradient opacity-90 blur-[2px]" />
            <div className="absolute inset-6 rounded-[2rem] bg-white/20 backdrop-blur-sm" />
            <div className="absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 40 40" className="h-24 w-24 drop-shadow-lg" aria-hidden="true">
                <path
                  d="M26.5 14.2c-1.1-1.6-3-2.6-5.4-2.6-3.3 0-5.8 1.9-5.8 4.7 0 2.5 1.8 3.7 4.9 4.5l1.6.4c1.6.4 2.4.9 2.4 1.9 0 1.1-1.1 1.8-2.8 1.8-1.8 0-3.1-.8-3.9-2.2l-3.4 2c1.2 2.3 3.7 3.7 7.1 3.7 3.7 0 6.4-1.9 6.4-5 0-2.7-1.9-3.9-5.1-4.7l-1.6-.4c-1.5-.4-2.2-.8-2.2-1.7 0-1 1-1.6 2.5-1.6 1.5 0 2.7.7 3.4 1.9l3.9-2.1z"
                  fill="#fff"
                />
              </svg>
            </div>
          </motion.div>

          {/* Floating service cards */}
          {heroCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className={`absolute ${cardPositions[i]} w-48`}
            >
              <div
                className="animate-float glass-card rounded-2xl p-4"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${card.accent} text-white`}
                  >
                    <card.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">
                      {card.title}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet card grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {heroCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="glass-card rounded-2xl p-4"
            >
              <span
                className={`mb-3 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${card.accent} text-white`}
              >
                <card.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{card.title}</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
