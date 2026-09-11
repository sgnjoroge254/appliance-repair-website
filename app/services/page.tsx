import Link from "next/link";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Services</p>
          <h1 className="mt-3 max-w-2xl font-head text-3xl font-extrabold text-ink sm:text-4xl">
            Electronics repair and engineering, down to the component level
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm text-ink/70">
            We diagnose before we repair, price transparently, and only replace what actually needs replacing. Exact turnaround depends on the fault, parts availability, and what's found during diagnosis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div id="services-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} id={s.slug}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steelline bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-head text-2xl font-bold text-white">Not sure if it fits?</h2>
            <p className="mt-2 max-w-md font-body text-sm text-white/70">Describe the equipment and fault to us and we'll let you know if it's something we can take on.</p>
          </div>
          <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
            Ask About My Equipment
          </Link>
        </div>
      </section>
    </>
  );
}