import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col border border-steelline bg-white pl-5 pr-6 py-6 [border-left-width:4px] [border-left-color:#122334]">
      <h3 className="font-head text-xl font-bold text-ink">{service.name}</h3>
      <p className="mt-2 font-body text-sm text-ink/70">{service.summary}</p>

      <dl className="mt-5 space-y-3 font-body text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Common issues</dt>
          <dd className="mt-1 text-ink/80">{service.commonIssues.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Turnaround</dt>
          <dd className="mt-1 text-ink/80">{service.turnaround}</dd>
        </div>
      </dl>

      {service.note && (
        <p className="mt-4 border-t border-steelline pt-4 font-body text-xs text-ink/50">{service.note}</p>
      )}

      <div className="mt-6 flex gap-4 font-body text-sm">
        <Link href={`/services#${service.slug}`} className="font-medium text-ink underline decoration-amber underline-offset-4 hover:text-amber">
          Details
        </Link>
        <Link href="/book-repair" className="font-medium text-ink underline decoration-amber underline-offset-4 hover:text-amber">
          Book this repair
        </Link>
      </div>
    </div>
  );
}
