export default function TrackRepairPage() {
  return (
    <section className="mx-auto max-w-lg px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Track repair</p>
      <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">
        Check your repair status
      </h1>
      <p className="mt-4 font-body text-sm text-ink/70">
        Enter the job ticket number from your booking confirmation to see the current status.
      </p>

      <form className="mt-8 border border-steelline bg-white p-6">
        <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="ticket">Job ticket number</label>
        <div className="mt-2 flex gap-3">
          <input id="ticket" name="ticket" type="text" placeholder="#00142" className="w-full border border-steelline px-3 py-2 font-mono text-sm" />
          <button type="submit" className="whitespace-nowrap bg-ink px-5 py-2 font-body text-sm font-medium text-white hover:bg-amber hover:text-ink">
            Check status
          </button>
        </div>
        <p className="mt-3 font-body text-xs text-ink/40">[Wire this up to your job/ticketing system — it's UI only right now.]</p>
      </form>
    </section>
  );
}
