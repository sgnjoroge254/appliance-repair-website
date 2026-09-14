import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Atomic Vitality Customer Experience",
  "Discover the clear communication, careful handling, and practical repair outcomes Atomic Vitality Tech Lab aims to deliver.",
  ["Atomic Vitality reviews", "electronics repair reviews Nairobi", "trusted repair lab Kenya", "customer electronics repair"],
);

const reviewThemes = [
  ["Clear explanations", "Customers should understand what failed, what can be repaired, and what the next decision involves."],
  ["Careful handling", "Every device is logged, inspected, and returned with findings that make the work easier to follow."],
  ["Practical outcomes", "We focus on dependable repairs that extend equipment life and reduce unnecessary replacement."],
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#fff7e5] via-steel to-[#d9f4f0] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b66d00]">Customer experience</p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-extrabold text-ink sm:text-6xl">Good repair work should leave you confident, not confused.</h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/70">We are building Atomic Vitality around the things customers value most: honest findings, careful work, realistic timing, and useful communication.</p>
        </div>
      </section>
      <section className="bg-[#f7fbfa] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {reviewThemes.map(([title, body]) => (
              <article key={title} className="border border-[#15a6a0]/30 bg-white p-7 shadow-sm">
                <p className="font-mono text-sm text-[#b66d00]">01 / 03</p>
                <h2 className="mt-6 font-head text-xl font-bold text-ink">{title}</h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 border-l-4 border-amber bg-[#fff8e8] p-6 font-body text-sm leading-relaxed text-ink/70">
            We welcome feedback after every completed job. Your experience helps us improve our assessments, communication, and repair handovers.
          </p>
        </div>
      </section>
      <section className="bg-[#081722] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-head text-2xl font-bold">Ready to experience the process?</h2>
          <Link href="/book-repair" className="bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">Start an assessment</Link>
        </div>
      </section>
    </>
  );
}
