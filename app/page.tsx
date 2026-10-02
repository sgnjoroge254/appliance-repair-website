import Link from "next/link";
import { services, businessInfo } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero: full-bleed background video with dark overlay */}
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

        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-wide text-white/60">Electronics repair, diagnosed and fixed right the first time</p>
          <h1 className="mt-4 font-head text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            {businessInfo.tagline}
          </h1>
          <p className="mt-5 max-w-md font-body text-base text-white/80">
            From faulty circuit boards to complex diagnostics, we repair what others replace — saving you the cost of a new device and keeping working electronics out of the landfill.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
              Book a Repair
            </Link>
            <Link href="/track-repair" className="border border-white/40 px-6 py-3 font-body text-sm font-medium text-white hover:bg-white/10">
              Track My Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
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

      {/* Closing CTA banner */}
      <section className="border-t border-steelline bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-head text-2xl font-bold text-white">Something not working?</h2>
            <p className="mt-2 max-w-md font-body text-sm text-white/70">
              Tell us the equipment and the fault. We'll confirm whether it's repairable before any work begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
              Book a Repair
            </Link>
            <Link href="/track-repair" className="border border-white/30 px-6 py-3 font-body text-sm font-medium text-white hover:bg-white/10">
              Track Existing Repair
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}