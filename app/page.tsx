const services = [
  ["WM", "Washing Machines", "Not draining, spinning, starting or cleaning properly."],
  ["RF", "Refrigerators & Freezers", "Cooling problems, leaks, noise and temperature issues."],
  ["CS", "Cookers & Stoves", "Burners, ignition, controls and heating problems."],
  ["OV", "Ovens", "Heating, thermostat, element and electrical faults."],
  ["DW", "Dishwashers", "Not filling, draining, cleaning or drying correctly."],
  ["MW", "Microwaves", "Heating, power, display and door-related faults."],
  ["DR", "Dryers", "Not heating, tumbling or completing the cycle."],
  ["+", "Other Appliances", "Tell us what you have and what has gone wrong."],
];

const areas = ["Nairobi", "Westlands", "Kilimani", "Lavington", "Kileleshwa", "Karen", "Runda", "Parklands"];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Professional appliance repair at your home</span>
          <a href="tel:+254700000000">Call: +254 700 000 000</a>
        </div>
      </div>

      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">APPLIANCE<span>FIX</span></a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#areas">Service Areas</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="btn btn-primary" href="#booking">BOOK A REPAIR</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">APPLIANCE REPAIR • NAIROBI</span>
            <h1>Your appliance is broken. We&apos;ll get it working again.</h1>
            <p>Professional appliance repair at your home in Nairobi and surrounding areas. Tell us what went wrong and we&apos;ll help you take the next step.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">BOOK A REPAIR</a>
              <a className="btn btn-whatsapp" href="https://wa.me/254700000000">WHATSAPP US</a>
            </div>
            <div className="hero-note">
              <span>Experienced technicians</span>
              <span>Clear communication</span>
              <span>Home service</span>
            </div>
          </div>
          <div className="hero-card" aria-label="Appliance repair illustration">
            <div className="appliance-art" />
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-inner">
          <strong>Appliance stopped working?</strong>
          <span>Tell us what&apos;s wrong and we&apos;ll help you get it fixed.</span>
          <a className="btn btn-dark" href="#booking">REQUEST A TECHNICIAN</a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What we repair</span>
            <h2>One team for the appliances your home depends on.</h2>
            <p>From everyday laundry appliances to kitchen essentials, we diagnose faults and recommend the practical next step.</p>
          </div>
          <div className="grid-4">
            {services.map(([icon, title, text]) => (
              <article className="service-card" key={title}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="why-us">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Why choose us</span>
            <h2>A repair experience built around trust.</h2>
            <p>Good appliance repair starts with good communication. We make the process simple from the first message to the final fix.</p>
          </div>
          <div className="features">
            <article className="feature"><h3>Fast response</h3><p>Get a clear next step instead of waiting and wondering what to do.</p></article>
            <article className="feature"><h3>Experienced technicians</h3><p>Practical fault diagnosis and repair for common household appliances.</p></article>
            <article className="feature"><h3>Transparent pricing</h3><p>Understand the work required before approving a repair.</p></article>
            <article className="feature"><h3>Quality workmanship</h3><p>Repairs focused on getting your appliance safely back into service.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">How it works</span>
            <h2>From broken to working in four simple steps.</h2>
          </div>
          <div className="steps">
            <article className="step"><div className="step-number">1</div><h3>Tell us what&apos;s wrong</h3><p>Call, WhatsApp or use the booking form to describe the problem.</p></article>
            <article className="step"><div className="step-number">2</div><h3>We diagnose</h3><p>We assess the symptoms and identify the likely fault.</p></article>
            <article className="step"><div className="step-number">3</div><h3>Approve the repair</h3><p>You understand the recommended work before we proceed.</p></article>
            <article className="step"><div className="step-number">4</div><h3>We fix it</h3><p>We complete the agreed repair and test the appliance.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-light" id="areas">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Service areas</span>
            <h2>Appliance repair around Nairobi.</h2>
            <p>We serve Nairobi and selected surrounding neighbourhoods. Contact us to confirm coverage for your location.</p>
          </div>
          <div className="areas">
            {areas.map((area) => <span className="area" key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container booking">
          <div className="booking-copy">
            <span className="section-kicker">Book a repair</span>
            <h2>Let&apos;s get your appliance working again.</h2>
            <p>Send the basic details below. We&apos;ll use them to understand the job and contact you about the next step.</p>
            <ul className="booking-list">
              <li>Describe the appliance and problem</li>
              <li>Tell us your Nairobi location</li>
              <li>Add a photo if it helps show the fault</li>
            </ul>
          </div>
          <form className="form" action="#" method="post">
            <div className="form-grid">
              <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" required /></div>
              <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="07XX XXX XXX" required /></div>
              <div className="field"><label htmlFor="location">Location</label><input id="location" name="location" placeholder="Estate / area" required /></div>
              <div className="field"><label htmlFor="appliance">Appliance</label><select id="appliance" name="appliance" defaultValue=""><option value="" disabled>Select appliance</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></div>
              <div className="field full"><label htmlFor="problem">What&apos;s wrong?</label><textarea id="problem" name="problem" placeholder="Describe the problem, error code or symptoms" required /></div>
              <div className="field"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" /></div>
              <div className="field"><label htmlFor="time">Preferred time</label><select id="time" name="time" defaultValue=""><option value="" disabled>Select a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
              <div className="field full"><button className="btn btn-primary" type="submit">REQUEST A REPAIR</button></div>
            </div>
          </form>
        </div>
      </section>

      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-head"><span className="section-kicker">FAQ</span><h2>Questions before you book?</h2></div>
          <div className="faqs">
            <details><summary>How much does appliance repair cost?</summary><p>The cost depends on the appliance, fault, parts and work required. We&apos;ll confirm the next step and applicable charges before proceeding with a repair.</p></details>
            <details><summary>Which appliance brands do you repair?</summary><p>We can assess many common household brands. Send us the brand and model when you contact us so we can confirm.</p></details>
            <details><summary>Can I send a photo of the appliance?</summary><p>Yes. A photo of the appliance, model label or error display can help us understand the job before the visit.</p></details>
            <details><summary>Do you serve outside Nairobi?</summary><p>Service coverage depends on location. Contact us with your area and we&apos;ll confirm availability.</p></details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Don&apos;t let a broken appliance disrupt your home.</h2>
          <p>Tell us what has gone wrong and take the first step toward getting it fixed.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}><a className="btn btn-primary" href="#booking">BOOK A REPAIR</a><a className="btn btn-whatsapp" href="https://wa.me/254700000000">WHATSAPP US</a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>APPLIANCEFIX</strong><br />Professional appliance repair in Nairobi.</div>
          <div>Call: <strong>+254 700 000 000</strong><br />WhatsApp: <strong>+254 700 000 000</strong></div>
          <div>© 2026 ApplianceFix. All rights reserved.</div>
        </div>
      </footer>

      <div className="mobile-actions"><a className="mobile-call" href="tel:+254700000000">CALL NOW</a><a className="mobile-wa" href="https://wa.me/254700000000">WHATSAPP</a></div>
    </main>
  );
}
