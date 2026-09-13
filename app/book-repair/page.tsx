import AssessmentForm from "@/components/AssessmentForm";

export default function BookRepairPage() {
  return (
    <section className="bg-gradient-to-br from-[#fff7e5] via-[#f7fbfa] to-[#dff7f1] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-[#b66d00]">Request an assessment</p>
        <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">Tell us about the equipment</h1>
        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink/70">
          Share the details below so our team can review the fault and advise you on the next step before any repair work begins.
        </p>
        <div className="mt-10">
          <AssessmentForm />
        </div>
      </div>
    </section>
  );
}
