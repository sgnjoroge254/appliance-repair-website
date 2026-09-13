import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col border border-amber/30 bg-gradient-to-br from-white via-white to-amber/10 pl-5 pr-6 py-6 shadow-sm [border-left-width:4px] [border-left-color:#E8A33D] transition hover:-translate-y-1 hover:border-amber hover:shadow-lg">
      <h3 className="font-head text-xl font-bold text-ink group-hover:text-[#b66d00]">{service.name}</h3>
      <p className="mt-2 font-body text-sm text-ink/70">{service.summary}</p>

      <dl className="mt-5 space-y-3 font-body text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-[#b66d00]">Common issues</dt>
          <dd className="mt-1 text-ink/80">{service.commonIssues.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-[#b66d00]">Turnaround</dt>
          <dd className="mt-1 text-ink/80">{service.turnaround}</dd>
        </div>
      </dl>

      {service.note && (
        <p className="mt-4 border-t border-steelline pt-4 font-body text-xs text-ink/50">{service.note}</p>
      )}

      <div className="mt-6 flex gap-4 font-body text-sm">
        <Link href={`/services#${service.slug}`} className="font-medium text-ink underline decoration-amber underline-offset-4 hover:text-[#b66d00]">
          Details
        </Link>
        <Link href="/book-repair" className="font-medium text-ink underline decoration-amber underline-offset-4 hover:text-[#b66d00]">
          Book this repair
        </Link>
      </div>
    </div>
  );
}
