import Link from "next/link";

const supportAreas = [
  ["Before you visit", "Send the equipment details, symptoms, and a clear photo so we can prepare for assessment."],
  ["Troubleshooting guidance", "Get practical next steps for power, connection, display, and intermittent fault symptoms."],
  ["Repair updates", "Use your repair reference or contact the lab directly when you need an update on equipment in our care."],
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-[#081722] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Support desk</p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-extrabold sm:text-6xl">Helpful guidance when your technology lets you down.</h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-slate-300">
            Start with a clear description of the problem. Our team will help you understand whether the equipment needs an assessment, a repair, or a safer replacement path.
          </p>
          <Link href="/book-repair" className="mt-8 inline-block bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
            Request support
          </Link>
        </div>
      </section>
      <section className="bg-[#f7fbfa] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {supportAreas.map(([title, body]) => (
            <article key={title} className="border-t-4 border-amber bg-white p-6 shadow-sm">
              <h2 className="font-head text-xl font-bold text-ink">{title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#122334] px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-head text-2xl font-bold">Need a direct answer?</h2>
          <p className="mt-3 font-body text-white/70">Call, email, or visit us at Kang&apos;ari Building, Luthuli Avenue, Nairobi CBD during our working hours.</p>
          <Link href="/contact" className="mt-6 inline-block border border-white/30 px-6 py-3 font-body text-sm hover:bg-white/10">Contact the lab</Link>
        </div>
      </section>
    </>
  );
}
