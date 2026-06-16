import { Link } from "@tanstack/react-router";
import { SERVICES, NEIGHBORHOODS, PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-md bg-gold grid place-items-center text-black font-black">ن</div>
            <div className="font-bold text-white">نجار جدة</div>
          </div>
          <p className="text-sm leading-relaxed">
            أفضل نجار في جدة لخدمات النجارة المنزلية والتجارية. خبرة تزيد عن 15 سنة وضمان على جميع الأعمال.
          </p>
          <p className="text-sm mt-4 font-en text-gold" dir="ltr">{PHONE_DISPLAY}</p>
          <p className="text-xs mt-2 text-white/60">جدة، المملكة العربية السعودية</p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold mb-4 text-gold">خدماتنا</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold transition">{s.titleAr}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold mb-4 text-gold">مناطق الخدمة</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {NEIGHBORHOODS.slice(0, 10).map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold mb-4 text-gold">تواصل سريع</h4>
          <div className="flex flex-col gap-3">
            <a href={TEL_URL} className="border border-white/15 hover:border-gold rounded-md px-4 py-2.5 text-sm">📞 اتصل الآن</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white rounded-md px-4 py-2.5 text-sm hover:opacity-90">💬 واتساب</a>
          </div>
          <p className="text-xs text-white/60 mt-5">السبت - الخميس<br/>7 صباحاً - 10 مساءً</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} نجار جدة — جميع الحقوق محفوظة</span>
          <span className="font-en">Best Carpenter in Jeddah</span>
        </div>
      </div>
    </footer>
  );
}
