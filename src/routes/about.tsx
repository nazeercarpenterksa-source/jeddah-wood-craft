import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/routes/index";
import { TEL_URL, WHATSAPP_URL } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | نجار جدة - About Us" },
      { name: "description", content: "تعرف على نجار جدة - خبرة 15 سنة في النجارة و2000+ عميل راضٍ في جميع أحياء جدة." },
      { property: "og:title", content: "من نحن | نجار جدة" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "الجودة", d: "نستخدم أفضل الخامات وأدق أدوات النجارة الحديثة" },
  { t: "الأمانة", d: "صدق في التعامل وشفافية كاملة في الأسعار" },
  { t: "الالتزام", d: "نلتزم بالمواعيد المتفق عليها بدقة" },
  { t: "السعر المناسب", d: "أسعار تنافسية تناسب جميع الفئات" },
];

function About() {
  return (
    <div>
      <section className="wood-grain text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link to="/" className="text-gold text-sm">← الرئيسية</Link>
          <h1 className="text-4xl md:text-6xl font-black mt-4">من نحن<span className="text-gold">.</span></h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
            نحن فريق نجارين محترفين في جدة، نقدم خدمات نجارة شاملة منذ أكثر من 15 سنة. نؤمن بأن كل قطعة أثاث تستحق العناية والاحترافية.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { n: "15+", l: "سنة خبرة" },
            { n: "2000+", l: "عميل راضٍ" },
            { n: "16+", l: "حي في جدة" },
          ].map((s) => (
            <div key={s.l} className="bg-ink text-white p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-gold">{s.n}</div>
              <div className="mt-2 text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader kicker="قصتنا" titleAr="رحلة من الشغف بالخشب" titleEn="Our Story" />
          <div className="mt-10 prose max-w-none text-base leading-loose text-foreground/80">
            <p>
              بدأت رحلتنا قبل أكثر من 15 عاماً بمحل نجارة صغير في جدة. اليوم، أصبحنا واحدين من أكثر النجارين ثقةً في المدينة بفضل التزامنا بالجودة والأمانة.
              خدمنا آلاف البيوت والفلل والمكاتب في كل أحياء جدة، من الروضة إلى الكورنيش، ومن السلامة إلى الفيصلية.
            </p>
            <p className="mt-4">
              فريقنا مدرّب على التعامل مع جميع أنواع الأخشاب والأثاث، من الكلاسيكي إلى المودرن، ومن أثاث ايكيا إلى التفصيل الفاخر. نستخدم أحدث الأدوات ونحرص على ترك المكان نظيفاً بعد كل عمل.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader dark kicker="قيمنا" titleAr="ما يميزنا" titleEn="Our Values" />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {values.map((v) => (
              <div key={v.t} className="border border-white/10 hover:border-gold rounded-lg p-6 transition">
                <div className="text-gold text-xl font-black">{v.t}</div>
                <p className="mt-2 text-white/70 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-wrap gap-3 justify-center">
            <a href={TEL_URL} className="bg-gold text-black font-bold px-6 py-3 rounded-md">اتصل الآن 📞</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="border-2 border-gold text-gold font-bold px-6 py-3 rounded-md">واتساب 💬</a>
          </div>
        </div>
      </section>
    </div>
  );
}
