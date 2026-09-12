import Link from "next/link";
import { services, businessInfo } from "@/lib/services";

const processSteps = [
  ["01", "Receive", "Equipment is logged and assigned a tracking reference."],
  ["02", "Pre-test", "Initial electrical checks establish a baseline before diagnosis."],
  ["03", "Diagnose", "Power, signals, and circuit behavior are measured to isolate the fault."],
  ["04", "Repair", "Component-level repair or rework is carried out under magnification."],
  ["05", "Validate", "Repaired equipment is tested against defined operating parameters."],
  ["06", "Handover", "Findings are documented before the equipment is returned."],
];

const industries = [
  ["Consumer electronics", "[Add the devices and equipment you handle]"],
  ["Industrial electronics", "[Add PLC, drive, control, or automation equipment]"],
  ["Networking and telecom", "[Add routers, switches, and communications hardware]"],
  ["Enterprise electronics", "[Add server boards and business-critical equipment]"],
];

export default function Home() {
  return (
    <>
      <section className="bg-[#081722] px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Atomic Vitality Tech Lab</p>
            <h1 className="mt-6 max-w-3xl font-head text-5xl font-extrabold leading-[0.98] text-white sm:text-7xl">
              Repairs that keep your technology working.
            </h1>
            <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-slate-300">
              {businessInfo.tagline}. We inspect the fault, explain what we find, and restore electronics with careful component-level work whenever repair is practical.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
                Tell us about your repair
              </Link>
              <Link href="/services" className="border border-white/30 px-6 py-3 font-body text-sm font-medium text-white hover:bg-white/10">
                View our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f1d2b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Capabilities</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">How we can help</h2>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="bg-[#0f1d2b] p-7">
                <p className="font-mono text-xs text-slate-500">0{services.indexOf(service) + 1}</p>
                <h3 className="mt-8 font-head text-xl font-bold text-white">{service.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">{service.summary}</p>
                <Link href={`/services#${service.slug}`} className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-amber hover:text-white">
                  Learn more →
                </Link>
              </article>
            ))}
            <article className="bg-[#0f1d2b] p-7">
              <p className="font-mono text-xs text-slate-500">04</p>
              <h3 className="mt-8 font-head text-xl font-bold text-white">Refurbishment</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">[Add another service you offer, such as equipment restoration or preventive maintenance.]</p>
              <Link href="/contact" className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-amber hover:text-white">
                Learn more →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#122334] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Industries</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">Equipment we work on</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, body]) => (
              <article key={title} className="border border-white/10 p-6">
                <h3 className="font-head text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">{body}</p>
                <Link href="/contact" className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-amber hover:text-white">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081722] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Process</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">A clear repair process</h2>
          <p className="mt-4 max-w-xl font-body text-slate-300">We keep you informed from the first inspection through testing and collection.</p>
          <ol className="mt-12 grid gap-0 border-t border-white/10 sm:grid-cols-2">
            {processSteps.map(([number, title, body]) => (
              <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-6">
                <span className="font-mono text-sm text-amber">{number}</span>
                <div>
                  <h3 className="font-head text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#0f1d2b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Our approach</p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <h2 className="font-head text-3xl font-bold text-white sm:text-4xl">Practical help for difficult faults.</h2>
            <div>
              <p className="font-body leading-relaxed text-slate-300">When a device is expensive, discontinued, or too important to replace, our team investigates the cause and looks for a dependable repair path.</p>
              <ul className="mt-6 grid gap-3 font-mono text-xs uppercase tracking-wide text-slate-300 sm:grid-cols-2">
                {["Clear explanations", "Careful inspection", "Component-level repair", "Upfront estimates", "Final functional testing", "Repair updates"].map((item) => <li key={item} className="border-l-2 border-amber pl-3">{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#122334] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Helpful information</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">Repair guidance</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["When is repair better than replacement?", "What happens during diagnosis?", "How should I prepare equipment for repair?"].map((title) => (
              <article key={title} className="border border-white/10 p-6">
                <h3 className="font-head text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 font-body text-sm text-slate-300">[Add an article summary here.]</p>
                <Link href="/contact" className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-amber hover:text-white">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#081722] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Start a repair request</p>
            <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">Something not working as it should?</h2>
            <p className="mt-4 max-w-xl font-body text-slate-300">Send us the equipment details and symptoms. We&apos;ll let you know what information is needed next.</p>
          </div>
          <Link href="/book-repair" className="whitespace-nowrap bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">Request an assessment</Link>
        </div>
      </section>
    </>
  );
}
