import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";

const capabilities = [
  {
    number: "01",
    title: "Advanced diagnostics",
    image: "/component-repair.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
  {
    number: "02",
    title: "Component-level board repair",
    image: "/power-board-repair.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
  {
    number: "03",
    title: "Failure analysis",
    image: "/vintage-circuit-board.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
  {
    number: "04",
    title: "PCB rework and modification",
    image: "/flex-cable-repair.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
  {
    number: "05",
    title: "Electronics refurbishment",
    image: "/laser-equipment-repair.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
  {
    number: "06",
    title: "Specialist equipment recovery",
    image: "/lab-red-light.jpg",
    purpose: "[Add the purpose of this service.]",
    activities: "[Add the typical activities included.]",
    deliverables: "[Add what the customer receives.]",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-amber/30 bg-gradient-to-br from-[#fff7e5] via-steel to-[#d9f4f0] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b66d00]">Core engineering capabilities</p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            From fault isolation to functional recovery
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/70">
            Each engagement is scoped around the equipment condition, available technical information, component availability, and your operational requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#f7fbfa] px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {capabilities.map((capability, index) => (
            <article key={capability.number} className="grid gap-8 border-b border-[#15a6a0]/20 pb-16 last:border-0 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden border-4 border-amber/30 bg-[#0f1d2b]">
                  <img src={capability.image} alt={`${capability.title} at Atomic Vitality Tech Lab`} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-mono text-sm text-[#b66d00]">{capability.number}</p>
                <h2 className="mt-3 font-head text-3xl font-bold text-ink">{capability.title}</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  <div className="border-l-4 border-amber bg-[#fff8e8] p-4">
                    <h3 className="font-mono text-xs uppercase tracking-wide text-[#9b5b00]">Purpose</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{capability.purpose}</p>
                  </div>
                  <div className="border-l-4 border-[#15a6a0] bg-[#e9fbf7] p-4">
                    <h3 className="font-mono text-xs uppercase tracking-wide text-[#087b78]">Typical activities</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{capability.activities}</p>
                  </div>
                  <div className="border-l-4 border-[#7c68d9] bg-[#f0edff] p-4">
                    <h3 className="font-mono text-xs uppercase tracking-wide text-[#5847ae]">Customer deliverables</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{capability.deliverables}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="border-t border-white/10 bg-[#081722] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-head text-2xl font-bold text-white">Have equipment that needs a second opinion?</h2>
            <p className="mt-2 max-w-xl font-body text-sm text-white/70">Describe the equipment and fault. We will confirm whether it is a fit for assessment and repair before work begins.</p>
          </div>
          <Link href="/book-repair" className="whitespace-nowrap bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
            Request an assessment
          </Link>
        </div>
      </section>
    </>
  );
}
