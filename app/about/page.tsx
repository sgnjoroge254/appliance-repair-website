import Link from "next/link";
import { businessInfo } from "@/lib/services";

const specialties = [
  {
    icon: "🔬",
    title: "Component-Level Board Repair",
    body: "We don't just replace entire boards — we fix them. Using advanced micro-soldering and circuit tracing, we identify and replace faulty capacitors, ICs, resistors, and traces on motherboards, logic boards, and specialized circuitry, saving you a fraction of the cost of a full replacement.",
  },
  {
    icon: "⚡",
    title: "Electronic Diagnostics & Repair",
    body: "Guesswork has no place in our lab. We use state-of-the-art diagnostic equipment to systematically isolate complex electronic failures — from power delivery issues to signal integrity faults — finding the root cause and executing precise, lasting repairs.",
  },
  {
    icon: "🛠",
    title: "Custom Electronic Solutions",
    body: "When there's no off-the-shelf fix, we design one. From replacement modules for discontinued equipment to purpose-built circuits, we engineer solutions for problems standard products don't solve.",
  },
];

const distinctions = [
  {
    title: "Microscopic precision",
    body: "Our technicians are qualified specialists in sophisticated circuit analysis and micro-soldering, and handle fragile components with unparalleled care.",
  },
  {
    title: "Root-cause resolution",
    body: "We don't use band-aid solutions. We identify the underlying problem to make sure your equipment is fixed correctly the first time.",
  },
  {
    title: "Eco-conscious technology",
    body: "We actively push back against the growing e-waste problem by repairing at the component level, giving your electronics a sustainable second life.",
  },
  {
    title: "Clear communication",
    body: "No technical jargon, no surprise costs. Before any work starts, we provide precise diagnostic reports, upfront pricing, and realistic timelines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/50">About</p>
          <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">
            Revitalizing your technology
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
            At {businessInfo.name}, every circuit has a pulse, and every gadget deserves a second chance. We're a technology innovation and repair lab committed to precisely diagnosing, repairing, and building electronic equipment.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
            In a world that's quick to discard, we choose to repair, optimize, and innovate. Whether it's a critical industrial motherboard, a sophisticated consumer device, or a custom hardware problem, our lab has the expertise and equipment to bring your technology back to full operation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-head text-xl font-bold text-ink">Our mission</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
              To save our clients time and money through unmatched component-level electronic repair and custom engineering solutions that extend the life of technology and reduce electronic waste.
            </p>
          </div>
          <div>
            <h2 className="font-head text-xl font-bold text-ink">Our vision</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
              To be the most trusted and advanced electronics diagnostics and repair lab in the region — known for turning "unfixable" into "fully functional."
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-2xl font-bold text-ink">What we do</h2>
          <p className="mt-2 max-w-xl font-body text-sm text-ink/70">
            We go beyond basic part-swapping. Our technicians are trained to understand the intricate architecture of modern electronics.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {specialties.map((s) => (
              <div key={s.title} className="border border-steelline bg-white p-6">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="mt-3 font-head text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-head text-2xl font-bold text-ink">Why choose {businessInfo.name}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {distinctions.map((d) => (
            <div key={d.title} className="border-l-2 border-amber pl-5">
              <h3 className="font-head text-base font-bold text-ink">{d.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-head text-xl font-bold text-ink">Our lab</h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
            {businessInfo.name} is built for accuracy and equipped with oscilloscopes, thermal imaging cameras, micro-soldering stations, and ESD-safe workbenches. We apply the same exacting level of care to everything from gaming devices and consumer gadgets to commercial and industrial equipment.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 border-t border-steelline pt-10 sm:grid-cols-4">
          {[
            ["Years in operation", "10"],
            ["Repairs completed", "1000+"],
            ["Avg. turnaround", "2–3 days"],
            ["Warranty on repairs", "6 months"],
          ].map(([label, value]) => (
            <div key={label}>
              <dd className="font-head text-2xl font-bold text-ink">{value}</dd>
              <dt className="mt-1 font-mono text-xs text-ink/50">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-steelline bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-head text-2xl font-bold text-white">Ready to get your technology back?</h2>
            <p className="mt-2 max-w-md font-body text-sm text-white/70">
              Don't let a malfunctioning board or an unexplained fault interfere with your devices or operations. Let our team diagnose the problem and design a fix.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
              Request a Diagnostic Estimate
            </Link>
            <Link href="/contact" className="border border-white/30 px-6 py-3 font-body text-sm font-medium text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
