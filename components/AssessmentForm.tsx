import { services } from "@/lib/services";

const fieldClassName = "mt-1 w-full border border-amber/40 bg-[#081722] px-3 py-2 font-body text-sm text-white placeholder:text-slate-400 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber";

export default function AssessmentForm() {
  return (
    <form className="space-y-10 border border-amber/50 bg-[#0f1d2b] p-6 shadow-2xl shadow-[#081722]/30 sm:p-8" encType="multipart/form-data">
      <fieldset className="space-y-5">
        <legend className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Your details</legend>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="customerName">Full name</label>
          <input id="customerName" name="customerName" type="text" required className={fieldClassName} />
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="companyName">Company <span className="text-slate-400">(optional)</span></label>
          <input id="companyName" name="companyName" type="text" className={fieldClassName} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="font-body text-sm text-slate-200" htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" required className={fieldClassName} />
          </div>
          <div>
            <label className="font-body text-sm text-slate-200" htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required className={fieldClassName} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-amber/20 pt-8">
        <legend className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Equipment details</legend>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="equipmentType">Equipment type</label>
          <input id="equipmentType" name="equipmentType" type="text" required placeholder="e.g. laptop, power supply, control board" className={fieldClassName} />
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="brandModel">Brand and model <span className="text-slate-400">(optional)</span></label>
          <input id="brandModel" name="brandModel" type="text" className={fieldClassName} />
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="service">Service area</label>
          <select id="service" name="service" className={fieldClassName}>
            {services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
            <option value="other">Other / not sure</option>
          </select>
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="faultDescription">Describe the fault</label>
          <textarea id="faultDescription" name="faultDescription" rows={5} required placeholder="What is happening with the equipment? Include anything you have noticed, even if it seems minor." className={fieldClassName} />
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="image">Photo of the equipment <span className="text-slate-400">(optional)</span></label>
          <input id="image" name="image" type="file" accept="image/*" className="mt-2 block w-full font-body text-sm text-slate-300 file:mr-4 file:border-0 file:bg-amber file:px-4 file:py-2 file:font-body file:text-sm file:text-ink hover:file:bg-white" />
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-amber/20 pt-8">
        <legend className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Fault & next steps</legend>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="powersOn">Does it power on?</label>
          <select id="powersOn" name="powersOn" className={fieldClassName} defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="yes">Yes</option><option value="no">No</option><option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="urgency">Urgency</label>
          <select id="urgency" name="urgency" className={fieldClassName} defaultValue="standard">
            <option value="standard">Standard</option><option value="urgent">Urgent</option>
          </select>
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="preferredContactMethod">Preferred contact</label>
          <select id="preferredContactMethod" name="preferredContactMethod" className={fieldClassName} defaultValue="email">
            <option value="email">Email</option><option value="phone">Phone</option><option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div>
          <label className="font-body text-sm text-slate-200" htmlFor="previousRepairAttempts">Previous repair attempts <span className="text-slate-400">(optional)</span></label>
          <textarea id="previousRepairAttempts" name="previousRepairAttempts" rows={4} placeholder="Leave blank if none, or if you are not sure." className={fieldClassName} />
        </div>
      </fieldset>

      <button type="submit" className="w-full bg-amber px-6 py-3 font-body text-sm font-medium text-ink hover:bg-white">
        Request Assessment
      </button>
      <p className="font-body text-xs leading-relaxed text-slate-400">
        Your details are used only to review the request and contact you about the equipment. Please do not include passwords, access codes, or other sensitive information.
      </p>
    </form>
  );
}
