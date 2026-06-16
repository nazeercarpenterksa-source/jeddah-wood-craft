import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, TEL_URL, WHATSAPP_URL } from "@/lib/site-data";
import { ServiceIcon } from "@/components/icons";
import { SectionHeader } from "@/routes/index";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) return { meta: [{ title: "خدمة غير موجودة" }] };
    return {
      meta: [
        { title: `${s.titleAr} في جدة | ${s.titleEn} Jeddah` },
        { name: "description", content: `${s.shortAr} - خدمة نجارة احترافية في جميع أحياء جدة بضمان وأسعار مناسبة.` },
        { property: "og:title", content: `${s.titleAr} في جدة` },
        { property: "og:description", content: s.shortAr },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((x) => x.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="text-3xl font-black">الخدمة غير موجودة</h1>
        <Link to="/" className="text-gold mt-4 inline-block">← العودة للرئيسية</Link>
      </div>
    </div>
  ),
});

const reasons = [
  { icon: "🛡️", titleAr: "ضمان على الشغل", desc: "نضمن جودة التركيب وسلامة الأثاث" },
  { icon: "⏱️", titleAr: "سرعة الاستجابة", desc: "نصل لك في نفس اليوم داخل جدة" },
  { icon: "💵", titleAr: "بدون مفاجآت", desc: "سعر واضح ومتفق عليه قبل البدء" },
];

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="wood-grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <Link to="/" className="text-gold text-sm mb-6 inline-flex items-center gap-2">← الرئيسية</Link>
          <div className="flex items-start gap-6 flex-wrap">
            <div className="h-20 w-20 rounded-lg bg-gold text-black grid place-items-center shrink-0">
              <ServiceIcon name={service.icon} className="h-10 w-10" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                {service.titleAr} <span className="text-gold">في جدة</span>
              </h1>
              <div className="text-base md:text-lg text-white/60 mt-2 font-en">{service.titleEn} Jeddah</div>
              <p className="mt-5 text-white/80 max-w-2xl leading-relaxed">{service.shortAr}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={TEL_URL} className="bg-gold text-black font-bold px-6 py-3 rounded-md hover:opacity-90">اتصل الآن 📞</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="border-2 border-gold text-gold font-bold px-6 py-3 rounded-md hover:bg-gold hover:text-black transition">احصل على سعر مجاني 💬</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader align="start" kicker="ما الذي نقدمه" titleAr="تفاصيل الخدمة" titleEn="What We Do" />
          <ul className="mt-10 grid gap-3">
            {service.tasks.map((t) => (
              <li key={t} className="flex items-start gap-4 bg-ink/[0.02] border-r-4 border-gold rounded-lg p-5">
                <span className="h-6 w-6 rounded-full bg-gold text-black grid place-items-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span className="text-base leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader dark kicker="مميزاتنا" titleAr="لماذا تختارنا لهذه الخدمة؟" titleEn="Why Choose Us" />
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {reasons.map((r) => (
              <div key={r.titleAr} className="border border-white/10 hover:border-gold rounded-lg p-6 transition">
                <div className="text-3xl mb-3">{r.icon}</div>
                <div className="font-bold">{r.titleAr}</div>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-gold text-black rounded-lg p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-black">احصل على سعر مجاني الآن</h3>
            <p className="mt-2 text-black/70">رد فوري على واتساب — بدون أي التزام</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-black text-gold font-bold px-7 py-3.5 rounded-md hover:bg-[oklch(0.2_0_0)]">
              راسلنا على واتساب 💬
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader kicker="خدمات أخرى" titleAr="قد تهمك أيضاً" titleEn="Related Services" />
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {related.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group bg-ink text-white border border-transparent hover:border-gold rounded-lg p-6 transition">
                <ServiceIcon name={s.icon} className="text-gold h-9 w-9" />
                <h3 className="mt-4 font-bold">{s.titleAr}</h3>
                <p className="mt-2 text-xs text-white/60">{s.shortAr}</p>
                <div className="mt-4 text-xs text-gold">اقرأ المزيد ←</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/" className="border-2 border-ink text-ink font-bold px-6 py-3 rounded-md inline-block hover:bg-ink hover:text-white transition">← العودة للرئيسية</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
