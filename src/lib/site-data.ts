import bedroomImg from "@/assets/services/bedroom-assembly.jpg";
import kitchenImg from "@/assets/services/kitchen-installation.jpg";
import doorImg from "@/assets/services/door-repair.jpg";
import decorImg from "@/assets/services/wood-decoration.jpg";
import customImg from "@/assets/services/custom-furniture.jpg";
import ikeaImg from "@/assets/services/ikea-assembly.jpg";
import curtainImg from "@/assets/services/curtain-installation.jpg";
import stairImg from "@/assets/services/under-stair-storage.jpg";
import pergolaImg from "@/assets/services/pergola-installation.jpg";
import renovationImg from "@/assets/services/furniture-renovation.jpg";

export type Service = {
  slug: string;
  titleAr: string;
  titleEn: string;
  shortAr: string;
  icon: string;
  image: string;
  tasks: string[];
};

export const PHONE = "+966548614812";
export const PHONE_DISPLAY = "+966 54 861 4812";
export const WHATSAPP = "966548614812";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
export const TEL_URL = `tel:${PHONE}`;

export const NEIGHBORHOODS = [
  "حي الروضة","حي السلامة","حي الحمراء","حي الزهراء","حي الأندلس","حي النزهة",
  "حي الربوة","حي الصفا","حي المروة","حي البوادي","حي الكورنيش","حي الشاطئ",
  "حي بريمان","حي النعيم","حي الفيصلية","حي الخالدية",
];

export const SERVICES: Service[] = [
  {
    slug: "bedroom-assembly",
    titleAr: "فك وتركيب غرف النوم",
    titleEn: "Bedroom Assembly",
    shortAr: "تركيب وفك جميع أنواع غرف النوم باحترافية",
    icon: "bed",
    image: bedroomImg,
    tasks: [
      "فك وتركيب جميع أنواع غرف النوم الكلاسيكية والمودرن",
      "تجميع غرف نوم ايكيا وجميع الماركات",
      "صيانة وتصليح السراير والكبتات والدواليب",
      "نقل الأثاث دون تلف أو خدش",
      "ضمان على جميع أعمال التركيب",
    ],
  },
  {
    slug: "kitchen-installation",
    titleAr: "تركيب مطابخ",
    titleEn: "Kitchen Installation",
    shortAr: "تركيب وتفصيل جميع أنواع المطابخ الخشبية",
    icon: "kitchen",
    image: kitchenImg,
    tasks: [
      "تركيب جميع أنواع المطابخ الخشبية",
      "تصنيع وتفصيل دواليب المطبخ حسب المقاس",
      "تغيير وتجديد المطابخ القديمة",
      "تركيب أحواض وملحقات المطبخ",
      "تركيب مطابخ ايكيا بالكامل",
    ],
  },
  {
    slug: "door-repair",
    titleAr: "صيانة وتصليح أبواب",
    titleEn: "Door Repair",
    shortAr: "تصليح وتركيب جميع أنواع الأبواب",
    icon: "door",
    image: doorImg,
    tasks: [
      "تصليح الأبواب الخشبية والمصفحة والألمنيوم",
      "تركيب وتغيير الكوالين والأقفال",
      "تركيب أبواب جديدة للغرف والمداخل",
      "فك وتركيب أبواب القصور والفلل",
      "صيانة الشبابيك والنوافذ الخشبية",
    ],
  },
  {
    slug: "wood-decoration",
    titleAr: "نجارة ديكور",
    titleEn: "Wood Decoration",
    shortAr: "تصميم وتنفيذ ديكورات خشبية فاخرة",
    icon: "deco",
    image: decorImg,
    tasks: [
      "تصميم وتنفيذ ديكورات الأسقف الخشبية",
      "ديكورات الجدران والبراويز الخشبية",
      "تفصيل رفوف ومكتبات ديكورية",
      "ديكورات فيلات وقصور",
      "أعمال نجارة للمساجد والفنادق",
    ],
  },
  {
    slug: "custom-furniture",
    titleAr: "تفصيل أثاث",
    titleEn: "Custom Furniture",
    shortAr: "تفصيل أثاث حسب الطلب والمقاسات",
    icon: "chair",
    image: customImg,
    tasks: [
      "تفصيل غرف نوم كاملة حسب الطلب",
      "تصنيع طاولات وكراسي وأرائك خشبية",
      "تفصيل دواليب ملابس مدمجة في الحائط",
      "مجالس خشبية تقليدية وعصرية",
      "تفصيل مكاتب وأثاث شركات",
    ],
  },
  {
    slug: "ikea-assembly",
    titleAr: "فك وتركيب أثاث ايكيا",
    titleEn: "IKEA Assembly",
    shortAr: "خدمة سريعة لتركيب أثاث ايكيا",
    icon: "box",
    image: ikeaImg,
    tasks: [
      "تركيب جميع قطع أثاث ايكيا",
      "فك أثاث ايكيا عند النقل وإعادة التركيب",
      "تصليح وصيانة أثاث ايكيا التالف",
      "تركيب مطابخ IKEA كاملة",
      "خدمة سريعة خلال 24 ساعة",
    ],
  },
  {
    slug: "curtain-installation",
    titleAr: "تركيب ستائر",
    titleEn: "Curtain Installation",
    shortAr: "تركيب جميع أنواع الستائر والكورنيش",
    icon: "curtain",
    image: curtainImg,
    tasks: [
      "تركيب جميع أنواع الستائر والكورنيش",
      "تركيب رولوبلايند وشرائح أفنشيان",
      "تغيير وإزالة الستائر القديمة",
      "قياس دقيق لجميع المقاسات",
      "خدمة منزلية متكاملة",
    ],
  },
  {
    slug: "under-stair-storage",
    titleAr: "تقفيل تحت السلم",
    titleEn: "Under-Stair Storage",
    shortAr: "استغلال أمثل لمساحة تحت السلم",
    icon: "stairs",
    image: stairImg,
    tasks: [
      "تصميم وتنفيذ خزائن تحت السلم",
      "استغلال أمثل للمساحات الفارغة",
      "تفصيل خزائن بالأبواب والأدراج",
      "تشطيبات عالية الجودة بأخشاب متينة",
      "أعمال متكاملة مع الدهان إذا لزم",
    ],
  },
  {
    slug: "pergola-installation",
    titleAr: "تركيب برجولات",
    titleEn: "Pergola Installation",
    shortAr: "برجولات خشبية للحدائق والأسطح",
    icon: "pergola",
    image: pergolaImg,
    tasks: [
      "تركيب برجولات خشبية للحدائق والأسطح",
      "تصميم برجولات حسب مساحة المكان",
      "أخشاب مقاومة للطقس والرطوبة",
      "برجولات بديكورات عربية وعصرية",
      "صيانة وتجديد البرجولات القائمة",
    ],
  },
  {
    slug: "furniture-renovation",
    titleAr: "ترميم وتجديد أثاث",
    titleEn: "Furniture Renovation",
    shortAr: "إعادة الحياة لأثاثك القديم",
    icon: "renew",
    image: renovationImg,
    tasks: [
      "ترميم وتصليح الأثاث التالف والمكسور",
      "تجديد دهانات وتشطيبات الأخشاب",
      "تحديث تصاميم الأثاث القديم",
      "معالجة الخدوش والشقوق والكسور",
      "إعادة الأثاث لمظهر الجديد بضمان",
    ],
  },
];
