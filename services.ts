export type Service = {
  slug: string;
  name: string;
  summary: string;
  applianceTypes: string[];
  commonIssues: string[];
  turnaround: string;
  note?: string;
};

export const businessInfo = {
  name: "Atomic Vitality Tech Lab",
  tagline: "[Short tagline — e.g. Component-level electronics repair and diagnostics you can trust]",
  phone: "0710 910 088",
  whatsappUrl: "https://wa.link/6tjkiv",
  email: "atomicvitality@gmail.com",
  address: "Kang'ari Building, Luthuli Avenue, Nairobi CBD",
  hours: "Mon–Sat, 8:00 AM – 7:00 PM",
};

export const services: Service[] = [
  {
    slug: "board-repair",
    name: "Component-Level Board Repair",
    summary: "Fault-tracing and repair down to the individual component, rather than swapping whole boards or units.",
    applianceTypes: ["Power supply boards", "Control & logic boards", "Motherboards", "Interface & driver boards"],
    commonIssues: ["Board dead / no power", "Intermittent faults", "Burnt or damaged components", "Failure after power surge"],
    turnaround: "[Diagnosis within X days, repair X–X days depending on parts]",
  },
  {
    slug: "diagnostics",
    name: "Electronic Diagnostics & Repair",
    summary: "Structured fault-finding on electronic devices and equipment before any repair work begins.",
    applianceTypes: ["Consumer electronics", "Industrial electronic modules", "Test & measurement equipment", "[Add other equipment types you handle]"],
    commonIssues: ["Won't power on", "Erratic or inconsistent behaviour", "Unknown or unconfirmed fault", "Repeated failure after prior repair"],
    turnaround: "[Same-day to X days for diagnosis]",
  },
  {
    slug: "custom-solutions",
    name: "Custom Electronic Solutions",
    summary: "Design and build of bespoke circuits or modules for problems off-the-shelf products don't solve.",
    applianceTypes: ["Prototype boards", "Replacement modules for discontinued equipment", "One-off control circuits", "[Add examples of past custom work]"],
    commonIssues: ["No commercial replacement available", "Equipment discontinued by manufacturer", "Need a purpose-built solution"],
    turnaround: "[Scoped per project after initial consultation]",
    note: "Scope, feasibility, and cost are confirmed after an initial technical consultation.",
  },
];
