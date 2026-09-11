import Link from "next/link";
import { services, businessInfo } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0f1d2b]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-slate-300">Electronics repair, diagnosed and fixed right the first time</p>
            <h1 className="mt-4 font-head text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              {businessInfo.tagline}
            </h1>
            <p className="mt-5 max-w-md font-body text-base text-slate-300">
              From faulty circuit boards to complex diagnostics, we repair what others replace — saving you the cost of a new device and keeping working electronics out of the landfill.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
                Book a Repair
              </Link>
              <Link href="/track-repair" className="border border-slate-500 px-6 py-3 font-body text-sm font-medium text-white hover:bg-white/10">
                Track My Repair
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <img src="/1789005050.png" alt={`${businessInfo.name} logo`} className="h-56 w-56 object-contain drop-shadow-[0_18px_38px_rgba(2,6,23,0.45)] sm:h-72 sm:w-72" />
          </div>
        </div>
      </section>

      <section className="bg-[#122334] px-6 py-20">
        <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-head text-2xl font-bold text-white sm:text-3xl">What we do</h2>
          <Link href="/services" className="whitespace-nowrap font-body text-sm font-medium text-slate-200 underline decoration-amber underline-offset-4 hover:text-white">
            View all services
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#081722]">
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