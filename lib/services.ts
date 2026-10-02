export type Service = {
  slug: string;
  name: string;
  summary: string;
  applianceTypes: string[];
  commonIssues: string[];
  turnaround: string;
  note?: string;
  image: string;
};

export const businessInfo = {
  name: "Atomic Tech Lab",
  tagline: "Appliance repair, diagnostics, and electronics servicing you can trust",
  phone: "0710 910 088",
  whatsappUrl: "https://wa.link/6tjkiv",
  email: "info@atomictechlab.com",
  address: "Kang'ari Building, Luthuli Avenue, Nairobi CBD",
  hours: "Mon–Sat, 8:00 AM – 7:00 PM",
};

export const services: Service[] = [
  {
    slug: "appliance-repair",
    name: "Appliance Repair & Diagnostics",
    summary: "We test faults, identify the real cause, and repair household and commercial appliances without unnecessary replacement.",
    applianceTypes: ["Fridges", "Freezers", "Washing machines", "Cookers", "Microwaves", "Dishwashers"],
    commonIssues: ["No power or intermittent start", "Heating or cooling faults", "Water leakage", "Unusual noises or control failures"],
    turnaround: "Diagnosis within 1–2 days, repair usually completed within 2–5 days depending on parts",
    image: "/glowvacuum.jpg",
  },
  {
    slug: "board-repair",
    name: "Board-Level Repair",
    summary: "Fault-tracing and repair down to the component level, so we can fix the real problem instead of replacing whole units.",
    applianceTypes: ["Power supply boards", "Control boards", "Logic modules", "Display and interface boards"],
    commonIssues: ["Board dead / no power", "Intermittent faults", "Burnt components", "Failure after power surges"],
    turnaround: "Diagnosis within 1–2 days, repair 2–5 days depending on parts availability",
    image: "/circuitboard.jpg",
  },
  {
    slug: "custom-solutions",
    name: "Custom Electronic Solutions",
    summary: "We build and adapt practical electronic fixes for equipment that needs a tailored approach rather than an off-the-shelf replacement.",
    applianceTypes: ["Prototype boards", "Replacement modules", "Control circuits", "Specialised device support"],
    commonIssues: ["No commercial replacement available", "Equipment discontinued by the manufacturer", "Need a purpose-built solution"],
    turnaround: "Scoped after an initial consultation and technical review",
    note: "We confirm feasibility, cost, and lead time before any build or repair work begins.",
    image: "/custom-solutions.jpg",
  },
];