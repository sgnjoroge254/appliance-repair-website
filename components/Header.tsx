"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/lib/services";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1d2b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/1789005050.png" alt={`${businessInfo.name} avatar`} className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/track-repair"
            className="hidden font-mono text-xs text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-white sm:block"
          >
            Track Repair
          </Link>
          <Link
            href="/book-repair"
            className="rounded-sm bg-ink px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-amber hover:text-ink"
          >
            Book a Repair
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center border border-white/20 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0f1d2b] px-6 py-4 md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block font-body text-sm text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/track-repair" className="block font-mono text-xs text-slate-300" onClick={() => setOpen(false)}>
                Track Repair
              </Link>
            </li>
            <li>
              <Link
                href="/book-repair"
                className="block bg-ink px-4 py-2 text-center font-body text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Book a Repair
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
