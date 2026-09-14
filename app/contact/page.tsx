import { businessInfo } from "@/lib/services";
import AssessmentForm from "@/components/AssessmentForm";
import SectionDivider from "@/components/SectionDivider";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Contact Electronics Repair Lab",
  "Contact Atomic Vitality Tech Lab at Kang'ari Building, Luthuli Avenue, Nairobi CBD for electronics repair, diagnostics, and technical assessment.",
  ["contact electronics repair Nairobi", "Atomic Vitality Nairobi CBD", "electronics repair Luthuli Avenue", "repair lab Nairobi phone"],
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#fff7e5] via-[#f7fbfa] to-[#dff7f1] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Contact</p>
          <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">Get in touch</h1>
          <dl className="mt-8 grid gap-3 font-body text-sm sm:grid-cols-2">
          <div className="border-l-4 border-amber bg-white/80 p-4">
            <dt className="font-mono text-xs text-ink/50">Phone</dt>
            <dd className="mt-1 text-ink">{businessInfo.phone}</dd>
          </div>
          <div className="border-l-4 border-[#15a6a0] bg-white/80 p-4">
            <dt className="font-mono text-xs text-ink/50">WhatsApp</dt>
            <dd className="mt-1">
        <a
                href={businessInfo.whatsappUrl}
                className="text-ink underline decoration-amber underline-offset-4 hover:text-amber"
              >
                Message us on WhatsApp
              </a>
            </dd>
          </div>
          <div className="border-l-4 border-[#ef6c57] bg-white/80 p-4">
            <dt className="font-mono text-xs text-ink/50">Email</dt>
            <dd className="mt-1 text-ink">{businessInfo.email}</dd>
          </div>
          <div className="border-l-4 border-[#7c68d9] bg-white/80 p-4">
            <dt className="font-mono text-xs text-ink/50">Address</dt>
            <dd className="mt-1 text-ink">{businessInfo.address}</dd>
          </div>
          <div className="border-l-4 border-[#e8a33d] bg-white/80 p-4">
            <dt className="font-mono text-xs text-ink/50">Hours</dt>
            <dd className="mt-1 text-ink">{businessInfo.hours}</dd>
          </div>
          </dl>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-[#b66d00]">Book a repair</p>
          <AssessmentForm />
        </div>
        </div>
      </section>

      <SectionDivider />

      <section className="border-t border-steelline bg-steel px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Find the lab</p>
              <h2 className="mt-2 font-head text-2xl font-bold text-ink">Kang'ari Building, Luthuli Avenue</h2>
              <p className="mt-2 font-body text-sm text-ink/70">Nairobi CBD</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Kang%27ari+Building,+Luthuli+Avenue,+Nairobi+CBD/@-1.2844603,36.8251478,18z/data=!3m1!4b1?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="bg-ink px-5 py-3 font-body text-sm font-medium text-white hover:bg-amber hover:text-ink"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Map showing Atomic Vitality Tech Lab location"
            src="https://www.google.com/maps?q=Kang%27ari+Building,+Luthuli+Avenue,+Nairobi+CBD&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 h-96 w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
