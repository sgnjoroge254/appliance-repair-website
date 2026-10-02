import Link from "next/link";
import { services, businessInfo } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-steelline">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/75" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            Appliance repair, diagnostics & electronics support
          </p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-7xl">
            Repairs that keep your appliances and electronics working.
          </h1>
          <p className="mt-5 max-w-2xl font-body text-base text-white/80 sm:text-lg">
            From faulty appliance boards to stubborn household issues, we diagnose the real cause, repair what can be saved, and keep working equipment out of landfill.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink transition hover:bg-white">
              Book a Repair
            </Link>
            <Link href="/track-repair" className="border border-white/40 px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-white/10">
              Track My Repair
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-head text-2xl font-bold text-ink sm:text-3xl">What we do</h2>
          <Link href="/services" className="whitespace-nowrap font-body text-sm font-medium text-ink underline decoration-amber underline-offset-4 hover:text-amber">
            View all services
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="border-t border-steelline bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Why choose us</p>
              <h2 className="mt-3 font-head text-3xl font-bold text-white">Clear diagnosis. Honest repair. Real value.</h2>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">01</p>
              <h3 className="mt-3 font-head text-xl font-bold text-white">We diagnose first</h3>
              <p className="mt-2 font-body text-sm text-white/70">We trace the fault before fixing it, so you do not pay for guesswork or unnecessary replacement.</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">02</p>
              <h3 className="mt-3 font-head text-xl font-bold text-white">We repair with purpose</h3>
              <p className="mt-2 font-body text-sm text-white/70">Whether it is a board-level fault or appliance issue, we focus on durable fixes and practical solutions.</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 p-5 lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">03</p>
              <h3 className="mt-3 font-head text-xl font-bold text-white">We keep electronics in use longer</h3>
              <p className="mt-2 max-w-3xl font-body text-sm text-white/70">Instead of replacing a whole appliance or module at the first sign of trouble, we help extend the life of your equipment where possible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steelline bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-head text-2xl font-bold text-white">Need a repair or advice?</h2>
            <p className="mt-2 max-w-lg font-body text-sm text-white/70">
              Tell us what is failing and we will help confirm whether it is repairable before any work begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink transition hover:bg-white">
              Book a Repair
            </Link>
            <Link href="/contact" className="border border-white/30 px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}