import { businessInfo } from "@/lib/services";

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Contact</p>
        <h1 className="mt-3 font-head text-3xl font-extrabold text-ink sm:text-4xl">Get in touch</h1>
        <dl className="mt-8 space-y-5 font-body text-sm">
          <div>
            <dt className="font-mono text-xs text-ink/50">Phone</dt>
            <dd className="mt-1 text-ink">{businessInfo.phone}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink/50">WhatsApp</dt>
            <dd className="mt-1">
              
                href={businessInfo.whatsappUrl}
                className="text-ink underline decoration-amber underline-offset-4 hover:text-amber"
              >
                Message us on WhatsApp
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink/50">Email</dt>
            <dd className="mt-1 text-ink">{businessInfo.email}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink/50">Address</dt>
            <dd className="mt-1 text-ink">{businessInfo.address}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink/50">Hours</dt>
            <dd className="mt-1 text-ink">{businessInfo.hours}</dd>
          </div>
        </dl>
      </div>

      <form className="space-y-4 border border-steelline bg-white p-6">
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-wide text-ink/50" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full border border-steelline px-3 py-2 font-body text-sm" />
        </div>
        <button type="submit" className="w-full bg-ink px-6 py-3 font-body text-sm font-medium text-white hover:bg-amber hover:text-ink">
          Send message
        </button>
        <p className="font-body text-xs text-ink/40">[Wire this form up to your email/CRM — it's UI only right now.]</p>
      </form>
    </section>
  );
}
