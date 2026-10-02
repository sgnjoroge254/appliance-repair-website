"use client";

import { FormEvent, useState } from "react";
import { businessInfo, services } from "@/lib/services";

const whatsappNumber = "254710910088";

export default function BookRepairPage() {
  const [formData, setFormData] = useState({
    appliance: services[0].name,
    brand: "",
    fault: "",
    name: "",
    phone: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const submitToWhatsApp = (event: FormEvent) => {
    event.preventDefault();

    const message = [
      "Hello Atomic Tech Lab, I would like to book a repair.",
      `Service needed: ${formData.appliance}`,
      `Equipment / brand: ${formData.brand || "Not provided"}`,
      `Fault: ${formData.fault || "Not provided"}`,
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const submitToEmail = (event: FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent("Repair request from website");
    const body = encodeURIComponent([
      "Hello Atomic Tech Lab,",
      "",
      "I would like to book a repair.",
      `Service needed: ${formData.appliance}`,
      `Equipment / brand: ${formData.brand || "Not provided"}`,
      `Fault: ${formData.fault || "Not provided"}`,
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      "",
      "Thank you.",
    ].join("\n"));

    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-gradient-to-br from-[#fff7e5] via-[#f7fbfa] to-[#dff7f1] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b66d00]">Request an assessment</p>
        <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">Tell us about the equipment</h1>
        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink/70 sm:text-base">
          Share the details below so our team can review the fault and advise you on the next step before any repair work begins.
        </p>

        <form onSubmit={submitToWhatsApp} className="mt-10 space-y-5 border border-steelline bg-white p-6 shadow-sm">
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="appliance">Service needed</label>
            <select
              id="appliance"
              name="appliance"
              value={formData.appliance}
              onChange={(event) => handleChange("appliance", event.target.value)}
              className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
            >
              {services.map((service) => (
                <option key={service.slug} value={service.name}>{service.name}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="brand">Equipment type / brand (if known)</label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={formData.brand}
              onChange={(event) => handleChange("brand", event.target.value)}
              className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
              placeholder="e.g. Fridge, washing machine, Samsung, LG..."
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fault">Describe the fault</label>
            <textarea
              id="fault"
              name="fault"
              rows={4}
              value={formData.fault}
              onChange={(event) => handleChange("fault", event.target.value)}
              className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
              placeholder="e.g. no power, not cooling, control board fault, leaking water, repeated shutdown..."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fname">Name</label>
              <input
                id="fname"
                name="fname"
                type="text"
                value={formData.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="fphone">Phone</label>
              <input
                id="fphone"
                name="fphone"
                type="tel"
                value={formData.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                className="mt-1 w-full border border-steelline bg-steel px-3 py-2 font-body text-sm text-ink"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="flex-1 bg-ink px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-amber hover:text-ink">
              Send via WhatsApp
            </button>
            <button type="button" onClick={submitToEmail} className="flex-1 border border-steelline bg-white px-6 py-3 font-body text-sm font-medium text-ink transition hover:bg-steel">
              Send via Email
            </button>
          </div>
          <p className="font-body text-xs text-ink/45">We usually respond within 1 business day for repair enquiries.</p>
        </form>
      </div>
    </section>
  );
}
