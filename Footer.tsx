import Link from "next/link";
import { businessInfo } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-steelline bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-head text-lg font-bold">{businessInfo.name}</p>
          <p className="mt-2 max-w-xs font-body text-sm text-white/70">{businessInfo.tagline}</p>
        </div>

        <div className="font-body text-sm text-white/70">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-white/50">Contact</p>
          <p>{businessInfo.phone}</p>
          <p>{businessInfo.email}</p>
          <p>{businessInfo.address}</p>
          <p className="mt-2 font-mono text-xs text-white/50">{businessInfo.hours}</p>
        </div>

        <div className="font-body text-sm text-white/70">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-white/50">Quick links</p>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/process" className="hover:text-white">Our Process</Link></li>
            <li><Link href="/track-repair" className="hover:text-white">Track Repair</Link></li>
            <li><Link href="/book-repair" className="hover:text-white">Book a Repair</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center font-mono text-xs text-white/40">
        © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
