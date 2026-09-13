const repairImages = [
  {
    src: "/power-board-repair.jpg",
    alt: "Power board undergoing component repair",
    label: "Power systems",
  },
  {
    src: "/vintage-circuit-board.jpg",
    alt: "Vintage circuit board with integrated chips",
    label: "Legacy electronics",
  },
  {
    src: "/laser-equipment-repair.jpg",
    alt: "Laser equipment being inspected",
    label: "Specialist equipment",
  },
  {
    src: "/flex-cable-repair.jpg",
    alt: "Flexible circuit cable prepared for repair",
    label: "Precision connections",
  },
  {
    src: "/lab-red-light.jpg",
    alt: "Laboratory equipment under red inspection lighting",
    label: "Lab diagnostics",
  },
];

export default function RepairGallery() {
  return (
    <section className="border-y border-white/10 bg-[#081722] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">In the lab</p>
        <h2 className="mt-3 font-head text-3xl font-bold text-white sm:text-4xl">Close work. Careful results.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {repairImages.map((image) => (
            <figure key={image.src} className="overflow-hidden border border-white/10 bg-[#0f1d2b]">
              <img src={image.src} alt={image.alt} className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <figcaption className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-slate-300">{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
