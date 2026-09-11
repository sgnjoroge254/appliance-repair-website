import Link from "next/link";
import { services, businessInfo } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero: styled as a work order / service ticket */}
      <section className="border-b border-steelline bg-steel">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Electronics repair, diagnosed and fixed right the first time</p>
            <h1 className="mt-4 font-head text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              {businessInfo.tagline}
            </h1>
            <p className="mt-5 max-w-md font-body text-base text-ink/70">
              From faulty circuit boards to complex diagnostics, we repair what others replace — saving you the cost of a new device and keeping working electronics out of the landfill.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book-repair" className="bg-ink px-6 py-3 font-body text-sm font-medium text-white hover:bg-amber hover:text-ink">
                Book a Repair
              </Link>
              <Link href="/track-repair" className="border border-ink px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
                Track My Repair
              </Link>
            </div>
          </div>

          {/* Ticket panel */}
          <div className="border border-steelline bg-white p-6 font-mono text-sm">
            <div className="flex items-center justify-between border-b border-steelline pb-3">
              <span className="text-ink/50">JOB TICKET</span>
              <span className="text-ink/50">#[00142]</span>
            </div>
            <dl className="mt-4 space-y-3">
              <div className="flex justify-between">
                <dt className="text-ink/50">Item</dt>
                <dd className="text-ink">Control board</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Fault</dt>
                <dd className="text-ink">No power output</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Status</dt>
                <dd className="text-amber">In diagnosis</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">ETA</dt>
                <dd className="text-ink">[X–X days]</dd>
              </div>
            </dl>
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