import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, TEL_URL, WHATSAPP_URL, PHONE, NEIGHBORHOODS } from "@/lib/site-data";
import { ServiceIcon } from "@/components/icons";
import { SectionHeader } from "@/routes/index";
import { marked } from "marked";

const SITE = "https://www.nazeercarpenter.com";

const contentModules = import.meta.glob("../content/services/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;
const contentBySlug: Record<string, string> = {};
for (const [path, raw] of Object.entries(contentModules)) {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const stripped = raw.replace(/^#\s+.+\n+/, "");
  contentBySlug[slug] = marked.parse(stripped, { async: false }) as string;
}

// Per-slug SEO overrides. Only bedroom-assembly is fully optimized here.
type SeoOverride = {
  title: string;
  description: string;
  keywordEn: string;
  whyChooseAr?: string;
  whyChooseEn?: string;
  ctaTitleAr?: string;
  faqs?: { q: string; a: string }[];
  relatedSlugs?: string[];
};
const SEO_OVERRIDES: Record<string, SeoOverride> = {
  "bedroom-assembly": {
    title: "Bedroom Installation Service in Jeddah | فك وتركيب غرف النوم",
    description:
      "Professional bedroom installation service in Jeddah — تركيب وفك جميع أنواع غرف النوم باحترافية مع ضمان وأسعار مناسبة.",
    keywordEn: "Bedroom Installation Service Jeddah",
    whyChooseAr: "لماذا تختار خدمتنا لتركيب غرف النوم",
    whyChooseEn: "Why Choose Our Bedroom Installation Service",
    ctaTitleAr: "جاهز لتركيب غرفة نومك اليوم؟",
    relatedSlugs: ["custom-furniture", "ikea-assembly", "kitchen-installation", "door-repair"],
    faqs: [
      {
        q: "لماذا تركيب غرفة النوم يحتاج إلى نجار محترف؟",
        a: "التركيب غير الصحيح يؤدي إلى عدم ثبات القطع، تلف الأسطح، عدم توازن الأدراج والأبواب، وتقليل عمر الأثاث. نجار محترف يضمن غرفة نوم متينة وآمنة تدوم لسنوات.",
      },
      {
        q: "كم تستغرق خدمة تركيب غرفة النوم؟",
        a: "غالباً ما يتم تركيب غرفة نوم كاملة خلال 3 إلى 6 ساعات حسب حجم الغرفة وتعقيد التصميم، وقد ننجزها في نفس اليوم داخل جدة.",
      },
      {
        q: "هل تقدمون ضماناً على التركيب؟",
        a: "نعم، نقدم ضماناً على جميع أعمال تركيب غرف النوم يشمل ثبات القطع وسلامة المفصلات والأدراج.",
      },
      {
        q: "هل تغطون جميع أحياء جدة؟",
        a: "نعم، نغطي جميع أحياء جدة بما فيها حي الروضة، حي السلامة، حي الحمراء، حي الزهراء، حي الأندلس، حي النزهة وغيرها.",
      },
    ],
  },
  "door-repair": {
    title: "Door Repair Service in Jeddah | صيانة وتصليح أبواب",
    description:
      "Professional door repair service in Jeddah — تصليح وتركيب جميع أنواع الأبواب باحترافية وسرعة، مع ضمان وأسعار مناسبة.",
    keywordEn: "Door Repair Service Jeddah",
    whyChooseAr: "لماذا تختار خدمتنا لإصلاح الأبواب",
    whyChooseEn: "Why Choose Our Door Repair Service",
    ctaTitleAr: "بابك يحتاج إصلاح عاجل؟",
    relatedSlugs: ["custom-furniture", "kitchen-installation", "bedroom-assembly", "ikea-assembly"],
    faqs: [
      {
        q: "كم تستغرق خدمة إصلاح الأبواب؟",
        a: "معظم أعمال الإصلاح تنجز في نفس اليوم خلال 1-3 ساعات حسب نوع المشكلة، سواء كانت في المفصلات أو القفل أو الإطار.",
      },
      {
        q: "هل تصلحون جميع أنواع الأبواب؟",
        a: "نعم، نصلح الأبواب الخشبية، المصفحة، الألمنيوم، الزجاجية، وأبواب الخزائن والمطابخ في جميع أحياء جدة.",
      },
      {
        q: "هل تقدمون ضماناً على الإصلاح؟",
        a: "نعم، نقدم ضماناً على أعمال إصلاح الأبواب يشمل المفصلات والأقفال والتركيب.",
      },
      {
        q: "هل توفرون خدمة عاجلة في نفس اليوم؟",
        a: "نعم، نوفر خدمة سريعة للحالات العاجلة داخل جدة ونصل خلال ساعات قليلة.",
      },
    ],
  },
  "custom-furniture": {
    title: "Custom Furniture Jeddah | تفصيل أثاث حسب الطلب في جدة",
    description:
      "Custom furniture Jeddah — تفصيل وتصنيع أثاث حسب الطلب في جدة: غرف نوم، دواليب مدمجة، مطابخ، مكاتب ومجالس خشبية بجودة عالية وأسعار مناسبة.",
    keywordEn: "Custom Furniture Jeddah",
    whyChooseAr: "لماذا تختار خدمتنا لتصنيع الأثاث المخصص في جدة",
    whyChooseEn: "Why Choose Our Custom Furniture Service in Jeddah",
    ctaTitleAr: "جاهز لتصنيع أثاثك المخصص اليوم؟",
    relatedSlugs: ["bedroom-assembly", "kitchen-installation", "wood-decoration", "ikea-assembly"],
    faqs: [
      {
        q: "لماذا تصنيع الأثاث المخصص يحتاج إلى نجار محترف؟",
        a: "تصنيع الأثاث حسب الطلب عملية دقيقة تجمع بين الحرفية والهندسة. أي خطأ يؤدي إلى عدم توافق القطعة مع المساحة، ضعف في المتانة، أو عدم تناسق مع الديكور. نجار محترف يضمن قطعة أثاث فريدة ومتينة تعكس ذوقك.",
      },
      {
        q: "كم يستغرق تصنيع قطعة أثاث حسب الطلب؟",
        a: "يعتمد الوقت على حجم القطعة وتعقيد التصميم، وغالباً تتراوح المدة بين 3 إلى 14 يوماً من المعاينة حتى التركيب النهائي داخل جدة.",
      },
      {
        q: "هل تقدمون معاينة وعرض سعر مجاني؟",
        a: "نعم، نوفر معاينة مجانية داخل جدة وأخذ القياسات الدقيقة، ونقدم عرض سعر واضح وشفاف قبل بدء العمل بدون أي التزام.",
      },
      {
        q: "هل تغطون جميع أحياء جدة؟",
        a: "نعم، نغطي جميع أحياء جدة بما فيها حي الروضة، حي السلامة، حي الحمراء، حي الزهراء، حي الأندلس، حي النزهة وغيرها.",
      },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) return { meta: [{ title: "خدمة غير موجودة" }] };
    const override = SEO_OVERRIDES[s.slug];
    const canonical = `${SITE}/services/${s.slug}`;
    const title = override?.title ?? `${s.titleAr} في جدة | ${s.titleEn} Jeddah`;
    const description = override?.description ?? `${s.shortAr} - خدمة نجارة احترافية في جميع أحياء جدة بضمان وأسعار مناسبة.`;
    const imageAbs = `${SITE}${s.image}`;

    const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "الخدمات", item: `${SITE}/#services` },
            { "@type": "ListItem", position: 3, name: s.titleAr, item: canonical },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: override?.keywordEn ?? `${s.titleEn} Service`,
          name: title,
          description,
          image: imageAbs,
          areaServed: {
            "@type": "City",
            name: "Jeddah",
            containsPlace: NEIGHBORHOODS.map((n) => ({ "@type": "Place", name: n })),
          },
          provider: {
            "@type": "LocalBusiness",
            name: "نجار جدة - Jeddah Carpenter",
            telephone: PHONE,
            priceRange: "$$",
            image: imageAbs,
            address: { "@type": "PostalAddress", addressLocality: "Jeddah", addressCountry: "SA" },
            openingHours: "Sa-Th 07:00-22:00",
            areaServed: "Jeddah",
          },
          url: canonical,
        }),
      },
    ];

    if (override?.faqs?.length) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: override.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      });
    }

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageAbs },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageAbs },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts,
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
  const override = SEO_OVERRIDES[service.slug];
  const relatedSlugs = override?.relatedSlugs;
  const related = relatedSlugs
    ? (relatedSlugs
        .map((sl) => SERVICES.find((x) => x.slug === sl))
        .filter(Boolean) as typeof SERVICES)
    : SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="wood-grain text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={`${override?.keywordEn ?? service.titleEn} in Jeddah - ${service.titleAr}`}
            width={1600}
            height={900}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <Link to="/" className="text-gold text-sm mb-6 inline-flex items-center gap-2">← الرئيسية</Link>
          <div className="flex items-start gap-6 flex-wrap">
            <div className="h-20 w-20 rounded-lg bg-gold text-black grid place-items-center shrink-0">
              <ServiceIcon name={service.icon} className="h-10 w-10" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                {service.titleAr} <span className="text-gold">في جدة</span>
              </h1>
              <div className="text-base md:text-lg mt-2 font-en">
                <strong className="text-white font-bold">
                  {override?.keywordEn ?? `${service.titleEn} Jeddah`}
                </strong>
              </div>
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
            {service.tasks.map((t: string) => (
              <li key={t} className="flex items-start gap-4 bg-ink/[0.02] border-r-4 border-gold rounded-lg p-5">
                <span className="h-6 w-6 rounded-full bg-gold text-black grid place-items-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span className="text-base leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {contentBySlug[service.slug] && (
        <section className="bg-white pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <article
              className="service-article"
              dangerouslySetInnerHTML={{ __html: contentBySlug[service.slug] }}
            />

            <div className="mt-10 bg-ink text-white rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-r-4 border-gold">
              <div className="text-center sm:text-right">
                <div className="text-xl md:text-2xl font-black">{override?.ctaTitleAr ?? `تحتاج ${service.titleAr}؟ نحن هنا لمساعدتك`}</div>
                <p className="text-white/70 text-sm mt-1">رد فوري خلال دقائق — تغطية جميع أحياء جدة</p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-black font-bold px-6 py-3 rounded-md hover:opacity-90 whitespace-nowrap"
              >
                تواصل معنا الآن عبر واتساب 💬
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader dark kicker="مميزاتنا" titleAr={override?.whyChooseAr ?? `لماذا تختار خدمتنا لـ${service.titleAr}`} titleEn={override?.whyChooseEn ?? `Why Choose Our ${service.titleEn} Service`} />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
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
