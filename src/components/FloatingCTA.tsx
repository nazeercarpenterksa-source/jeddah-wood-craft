import { TEL_URL, WHATSAPP_URL } from "@/lib/site-data";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 inset-x-0 z-50 md:hidden px-4">
      <div className="flex gap-3 max-w-md mx-auto">
        <a href={TEL_URL} className="flex-1 bg-gold text-black rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold shadow-xl">
          <PhoneIcon className="h-5 w-5" /> اتصل
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold shadow-xl">
          <WhatsAppIcon className="h-5 w-5" /> واتساب
        </a>
      </div>
    </div>
  );
}
