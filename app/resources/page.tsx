import Link from "next/link";

const resources = [
  ["Prepare equipment for assessment", "Bring the complete unit where possible, include relevant cables or adapters, and write down the symptoms and when they began."],
  ["Photograph the fault", "Clear photos of labels, connectors, visible damage, and error messages can help us prepare before the equipment arrives."],
  ["Protect your data", "Back up important files and remove passwords or sensitive information where practical before handing over a device."],
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#0f1d2b] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Repair resources</p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-extrabold sm:text-6xl">Make the assessment clearer from the start.</h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300">A little preparation helps our technicians reproduce faults, protect your equipment, and give you a more useful recommendation.</p>
        </div>
      </section>
      <section className="bg-[#f7fbfa] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {resources.map(([title, body], index) => (
            <article key={title} className="border-t-4 border-[#15a6a0] bg-white p-7 shadow-sm">
              <p className="font-mono text-sm text-[#087b78]">0{index + 1}</p>
              <h2 className="mt-6 font-head text-xl font-bold text-ink">{title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#122334] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-2xl font-bold">Have a question before booking?</h2>
          <Link href="/contact" className="mt-6 inline-block bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">Ask the lab</Link>
        </div>
      </section>
    </>
  );
}
