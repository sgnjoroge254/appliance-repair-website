"use client";

import { FormEvent, useState } from "react";
import { businessInfo } from "@/lib/services";
import SectionDivider from "@/components/SectionDivider";

const whatsappNumber = "254710910088";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const sendViaWhatsApp = (event: FormEvent) => {
    event.preventDefault();

    const message = [
      "Hello Atomic Tech Lab, I would like to get in touch.",
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Message: ${formData.message || "Not provided"}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const sendViaEmail = (event: FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent("Website enquiry");
    const body = encodeURIComponent([
      "Hello Atomic Tech Lab,",
      "",
      "I would like to get in touch.",
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Message: ${formData.message || "Not provided"}`,
      "",
      "Thank you.",
    ].join("\n"));

    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[#fff7e5] via-[#f7fbfa] to-[#dff7f1] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50">Contact</p>
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
              <div className="border-l-4 border-[#e8a33d] bg-white/80 p-4 sm:col-span-2">
                <dt className="font-mono text-xs text-ink/50">Hours</dt>
                <dd className="mt-1 text-ink">{businessInfo.hours}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#b66d00]">Book a repair</p>
            <form onSubmit={sendViaWhatsApp} className="space-y-4 border border-steelline bg-white p-6 shadow-sm">
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
                  placeholder="Tell us about the fault or the equipment you need help with"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="flex-1 bg-ink px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-amber hover:text-ink">
                  Send via WhatsApp
                </button>
                <button type="button" onClick={sendViaEmail} className="flex-1 border border-steelline bg-white px-6 py-3 font-body text-sm font-medium text-ink transition hover:bg-steel">
                  Send via Email
                </button>
              </div>
            </form>
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
