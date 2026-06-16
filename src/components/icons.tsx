type IconProps = { className?: string };
const base = "h-10 w-10 stroke-current fill-none";

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const cls = `${base} ${className ?? ""}`;
  const sw = 1.6;
  switch (name) {
    case "bed":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 18V8m18 10v-4a3 3 0 0 0-3-3H3m18 7H3m4-7V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3"/></svg>);
    case "kitchen":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 3v6M9 15h.01M9 19h.01"/></svg>);
    case "door":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M4 21h16M15 12h.01"/></svg>);
    case "deco":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 3h18v6H3zM3 15h18v6H3zM7 9v6M17 9v6M12 9v6"/></svg>);
    case "chair":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M6 10V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M4 14h16l-1 4H5zM7 18v3M17 18v3"/></svg>);
    case "box":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7M12 11v10"/></svg>);
    case "curtain":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 4h18M5 4v16c3-1 4-7 4-10S8 5 5 4zm14 0v16c-3-1-4-7-4-10s1-5 4-6zM12 4v16"/></svg>);
    case "stairs":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 21h4v-4h4v-4h4V9h4V5h2"/></svg>);
    case "pergola":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M3 8l9-4 9 4M5 8v13M19 8v13M3 12h18M3 16h18"/></svg>);
    case "renew":
      return (<svg viewBox="0 0 24 24" className={cls} strokeWidth={sw}><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/></svg>);
    default:
      return null;
  }
}

export const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.57-1 3.65 3.74-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
