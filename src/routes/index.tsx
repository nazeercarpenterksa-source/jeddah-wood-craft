import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, NEIGHBORHOODS, TEL_URL, WHATSAPP_URL } from "@/lib/site-data";
import { ServiceIcon, StarIcon } from "@/components/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نجار جدة | أفضل نجار في جدة - Best Carpenter in Jeddah" },
      { name: "description", content: "نجار محترف في جدة لخدمات فك وتركيب الأثاث، المطابخ، الأبواب والديكورات. اتصل الآن لخدمة سريعة في كل أحياء جدة." },
      { property: "og:title", content: "نجار جدة | Best Carpenter in Jeddah" },
      { property: "og:description", content: "خدمات نجارة احترافية في جميع أحياء جدة - خبرة 15 سنة" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  { icon: "🏆", titleAr: "خبرة +15 سنة", titleEn: "15+ Years Experience" },
  { icon: "⚡", titleAr: "استجابة سريعة", titleEn: "Fast Response" },
  { icon: "💰", titleAr: "أسعار تنافسية", titleEn: "Competitive Prices" },
  { icon: "✅", titleAr: "ضمان على الأعمال", titleEn: "Work Guarantee" },
];

const testimonials = [
  { name: "أبو خالد", text: "خدمة ممتازة وسرعة في التنفيذ. ركّبوا غرفة النوم في أقل من ساعتين وبدقة عالية." },
  { name: "أم محمد", text: "أفضل نجار تعاملت معه في جدة. أمانة، نظافة، وأسعار معقولة جداً. أنصح فيه بقوة." },
  { name: "فهد العتيبي", text: "صنعوا لي مطبخ مفصل بالكامل وطلع أحسن من اللي تصورته. شغل احترافي وضمان." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="wood-grain text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-gold/40 text-gold rounded-full px-4 py-1.5 text-xs mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              متاح للخدمة الآن في جدة
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              أفضل <span className="text-gold">نجار في جدة</span>
              <span className="block text-xl md:text-2xl text-white/70 font-en font-semibold mt-3 tracking-tight">Best Carpenter in Jeddah</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              خدمات نجارة احترافية لجميع أحياء جدة — فك وتركيب الأثاث، تفصيل مطابخ، ديكورات خشبية، أبواب وأكثر. خبرة تزيد عن 15 سنة وضمان كامل على جميع الأعمال.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={TEL_URL} className="bg-gold text-black font-bold px-6 py-3.5 rounded-md hover:bg-[oklch(0.82_0.14_85)] transition inline-flex items-center gap-2">
                اتصل الآن 📞
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="border-2 border-gold text-gold font-bold px-6 py-3.5 rounded-md hover:bg-gold hover:text-black transition inline-flex items-center gap-2">
                واتساب 💬
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div><div className="text-2xl font-black text-gold">15+</div><div className="text-white/60">سنة خبرة</div></div>
              <div><div className="text-2xl font-black text-gold">2000+</div><div className="text-white/60">عميل راضٍ</div></div>
              <div><div className="text-2xl font-black text-gold">16+</div><div className="text-white/60">حي في جدة</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader kicker="لماذا نختار" titleAr="لماذا نحن؟" titleEn="Why Choose Us" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {reasons.map((r) => (
              <div key={r.titleAr} className="bg-ink text-white rounded-lg p-6 md:p-8 text-center border border-transparent hover:border-gold transition group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition">{r.icon}</div>
                <div className="font-bold text-base md:text-lg">{r.titleAr}</div>
                <div className="text-xs text-gold mt-1 font-en">{r.titleEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader dark kicker="ماذا نقدم" titleAr="خدماتنا" titleEn="Our Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group bg-[oklch(0.16_0_0)] border border-white/10 hover:border-gold rounded-lg p-6 transition-all hover:-translate-y-1"
              >
                <ServiceIcon name={s.icon} className="text-gold h-10 w-10" />
                <h3 className="mt-4 font-bold text-base">{s.titleAr}</h3>
                <div className="text-[11px] text-gold/80 font-en mt-0.5 tracking-wide">{s.titleEn}</div>
                <p className="mt-3 text-xs text-white/60 leading-relaxed">{s.shortAr}</p>
                <div className="mt-4 text-xs text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  اقرأ المزيد <span>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader kicker="مناطق الخدمة" titleAr="نخدم جميع أحياء جدة" titleEn="Serving All Jeddah Neighborhoods" />
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mt-10 max-w-4xl mx-auto">
            {NEIGHBORHOODS.map((n) => (
              <span key={n} className="bg-ink text-white px-4 py-2 rounded-full text-sm border border-transparent hover:border-gold hover:text-gold transition cursor-default">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader dark kicker="آراء العملاء" titleAr="ماذا يقول عملاؤنا" titleEn="Testimonials" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[oklch(0.16_0_0)] border border-white/10 rounded-lg p-6">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="h-4 w-4" />)}
                </div>
                <p className="text-white/80 leading-relaxed text-sm">"{t.text}"</p>
                <div className="mt-5 pt-4 border-t border-white/10 font-bold text-sm">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader align="start" kicker="تواصل معنا" titleAr="جاهزون لخدمتك في أي وقت" titleEn="Contact Us" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              اتصل بنا الآن أو راسلنا عبر واتساب للحصول على عرض سعر مجاني خلال دقائق. خدمتنا متاحة في جميع أحياء جدة.
            </p>
            <div className="mt-8 space-y-4">
              <a href={TEL_URL} className="flex items-center gap-4 bg-ink text-white rounded-lg px-5 py-4 hover:bg-gold hover:text-black transition">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-xs opacity-70">اتصل الآن</div>
                  <div className="font-bold font-en" dir="ltr">+966 50 000 0000</div>
                </div>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#25D366] text-white rounded-lg px-5 py-4 hover:opacity-90 transition">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="text-xs opacity-90">راسلنا</div>
                  <div className="font-bold">واتساب — رد فوري</div>
                </div>
              </a>
              <div className="flex items-center gap-4 border border-border rounded-lg px-5 py-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <div className="text-xs text-muted-foreground">ساعات العمل</div>
                  <div className="font-bold">السبت - الخميس: 7ص - 10م</div>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square md:aspect-auto md:h-[420px] bg-ink rounded-lg overflow-hidden border border-border">
            <iframe
              title="Jeddah Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237719.7!2d39.05!3d21.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1700000000000"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export function SectionHeader({
  kicker, titleAr, titleEn, dark = false, align = "center",
}: { kicker?: string; titleAr: string; titleEn: string; dark?: boolean; align?: "center" | "start" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {kicker && <div className="text-gold text-xs tracking-[0.25em] uppercase font-en mb-3">{kicker}</div>}
      <h2 className={`text-3xl md:text-4xl font-black ${dark ? "text-white" : "text-ink"}`}>{titleAr}</h2>
      <div className={`mt-2 text-sm font-en font-medium ${dark ? "text-white/50" : "text-muted-foreground"}`}>{titleEn}</div>
      <div className={`h-1 w-16 bg-gold mt-4 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
