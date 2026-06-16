import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SERVICES, TEL_URL, WHATSAPP_URL, WHATSAPP, PHONE_DISPLAY } from "@/lib/site-data";
import { SectionHeader } from "@/routes/index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | نجار جدة - Contact" },
      { name: "description", content: "تواصل مع أفضل نجار في جدة عبر الهاتف أو واتساب للحصول على عرض سعر مجاني." },
      { property: "og:title", content: "تواصل معنا | نجار جدة" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0].titleAr, message: "" });

  const sendWA = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `السلام عليكم،%0Aالاسم: ${form.name}%0Aالجوال: ${form.phone}%0Aالخدمة: ${form.service}%0Aالرسالة: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <div>
      <section className="wood-grain text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link to="/" className="text-gold text-sm">← الرئيسية</Link>
          <h1 className="text-4xl md:text-5xl font-black mt-4">تواصل <span className="text-gold">معنا</span></h1>
          <p className="mt-4 text-white/70 max-w-xl">جاهزون لخدمتك في أي وقت — احصل على عرض سعر مجاني خلال دقائق.</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <form onSubmit={sendWA} className="bg-ink/[0.02] border border-border rounded-lg p-6 md:p-8 space-y-4">
            <SectionHeader align="start" kicker="نموذج التواصل" titleAr="اطلب خدمتك" titleEn="Request Service" />
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Field label="الاسم" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="رقم الجوال" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required type="tel" />
            </div>
            <label className="block">
              <span className="text-sm font-bold">نوع الخدمة</span>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-1.5 w-full bg-white border border-border rounded-md px-3 py-2.5 text-sm">
                {SERVICES.map((s) => <option key={s.slug}>{s.titleAr}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold">الرسالة</span>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="mt-1.5 w-full bg-white border border-border rounded-md px-3 py-2.5 text-sm" placeholder="اكتب تفاصيل طلبك..." />
            </label>
            <button type="submit" className="w-full bg-gold text-black font-bold py-3.5 rounded-md hover:opacity-90">إرسال عبر واتساب 💬</button>
          </form>

          <div className="space-y-4">
            <a href={TEL_URL} className="block bg-ink text-white rounded-lg p-6 hover:bg-gold hover:text-black transition">
              <div className="text-xs opacity-70">اتصل مباشرة</div>
              <div className="font-en font-black text-2xl mt-1" dir="ltr">{PHONE_DISPLAY}</div>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block bg-[#25D366] text-white rounded-lg p-6 hover:opacity-90">
              <div className="text-xs opacity-90">واتساب — رد فوري</div>
              <div className="font-black text-2xl mt-1">راسلنا الآن 💬</div>
            </a>
            <div className="border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground">ساعات العمل</div>
              <div className="font-bold text-lg mt-1">السبت - الخميس</div>
              <div className="text-gold font-bold">7 صباحاً — 10 مساءً</div>
            </div>
            <div className="aspect-video bg-ink rounded-lg overflow-hidden border border-border">
              <iframe
                title="Jeddah"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237719.7!2d39.05!3d21.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1700000000000"
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-bold">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required}
        className="mt-1.5 w-full bg-white border border-border rounded-md px-3 py-2.5 text-sm focus:border-gold focus:outline-none" />
    </label>
  );
}
