import Link from "next/link";
import { businessInfo } from "@/lib/services";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steelline bg-steel/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-head text-lg font-bold tracking-tight text-ink">
          {businessInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/track-repair"
            className="hidden font-mono text-xs text-ink/70 underline decoration-steelline underline-offset-4 hover:text-ink sm:block"
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
      </div>
    </header>
  );
}
