import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/site-data";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/about", label: "من نحن" },
    { to: "/#services", label: "خدماتنا" },
    { to: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-ink text-white border-b border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-9 rounded-md bg-gold grid place-items-center text-black font-black text-lg">ن</div>
          <div className="leading-tight">
            <div className="text-sm font-bold">نجار جدة</div>
            <div className="text-[10px] text-gold font-en tracking-widest">JEDDAH CARPENTER</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.to} href={l.to} className="hover:text-gold transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={TEL_URL} className="font-en text-sm text-white/80 hover:text-gold flex items-center gap-2" dir="ltr">
            <PhoneIcon className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-[#25D366] text-white hover:scale-105 transition">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        <button className="md:hidden h-10 w-10 grid place-items-center" onClick={() => setOpen(!open)} aria-label="menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="block py-2 text-base border-b border-white/5">{l.label}</a>
          ))}
          <a href={TEL_URL} className="font-en text-sm text-gold block pt-2" dir="ltr">{PHONE_DISPLAY}</a>
        </div>
      )}
    </header>
  );
}
