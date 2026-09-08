import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Book a repair",
    body: "Tell us the equipment, brand, and what's going wrong. We'll ask a few questions to understand the fault before scheduling.",
  },
  {
    step: "02",
    title: "Diagnosis",
    body: "A technician inspects the equipment — in-lab or on-site depending on the job — and identifies the fault.",
  },
  {
    step: "03",
    title: "Quote & approval",
    body: "You get a clear quote before any repair work starts. Nothing proceeds without your approval.",
  },
  {
    step: "04",
    title: "Repair",
    body: "We carry out the repair using [sourced / OEM / compatible] parts and test the equipment under normal operating conditions.",
  },
  {
    step: "05",
    title: "Handover & warranty",
    body: "You get the equipment back working, plus a 6-month warranty on the repair.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Process</p>
          <h1 className="mt-3 max-w-2xl font-head text-3xl font-extrabold text-ink sm:text-4xl">
            How a repair moves from booking to done
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <ol className="space-y-10">
          {steps.map((s) => (
            <li key={s.step} className="flex gap-6 border-b border-steelline pb-10 last:border-0 last:pb-0">
              <span className="font-mono text-sm text-ink/40">{s.step}</span>
              <div>
                <h2 className="font-head text-xl font-bold text-ink">{s.title}</h2>
                <p className="mt-2 font-body text-sm text-ink/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-steelline bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-head text-2xl font-bold text-white">Ready to get started?</h2>
          <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
            Book a Repair
          </Link>
        </div>
      </section>
    </>
  );
}
