import { services } from "@/lib/services";

export default function BookRepairPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Book a repair</p>
      <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">
        Tell us what's wrong
      </h1>
      <p className="mt-4 font-body text-sm text-ink/70">
        We'll confirm whether it's a fit for repair and get back to you with next steps — usually within [X hours].
      </p>

      <form className="mt-10 space-y-5 border border-steelline bg-white p-6">
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="appliance">Service needed</label>
          <select id="appliance" name="appliance" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm">
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="brand">Equipment type / brand (if known)</label>
          <input id="brand" name="brand" type="text" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fault">Describe the fault</label>
          <textarea id="fault" name="fault" rows={4} className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" placeholder="e.g. no power output, intermittent fault, board dead after power surge..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fname">Name</label>
            <input id="fname" name="fname" type="text" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fphone">Phone</label>
            <input id="fphone" name="fphone" type="tel" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
          </div>
        </div>
        <button type="submit" className="w-full bg-ink px-6 py-3 font-body text-sm font-medium text-white hover:bg-amber hover:text-ink">
          Submit request
        </button>
        <p className="font-body text-xs text-ink/40">[Wire this form up to your booking system/CRM — it's UI only right now.]</p>
      </form>
    </section>
  );
}
