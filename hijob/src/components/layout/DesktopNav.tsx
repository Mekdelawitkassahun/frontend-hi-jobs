import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { SEARCH_QUERY } from "@/lib/data";

function ProgressRing({ pct = 70 }: { pct?: number }) {
  const r = 17, circ = 2 * Math.PI * r, dash = (pct / 100) * circ;
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden className="shrink-0">
      <circle cx="23" cy="23" r={r} fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
      <circle cx="23" cy="23" r={r} fill="none" stroke="#ACD844" strokeWidth="3.5"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 23 23)" />
      <text x="23" y="27" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#242121" style={{ fontFamily: "Inter, sans-serif" }}>{pct}%</text>
    </svg>
  );
}

function AnalyticsIcon() {
  return <Image src="/health.svg" alt="" width={17} height={17} aria-hidden />;
}

function BellIcon() {
  return <Image src="/notification.svg" alt="" width={17} height={17} aria-hidden />;
}

function NavBtn({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  if (active) {
    return (
      <button type="button" className="flex items-center justify-center gap-1.5 font-medium text-white"
        style={{ width: "80px", height: "40px", borderRadius: "13px", backgroundColor: "#4D5A68", fontSize: "13px", fontFamily: "Inter, sans-serif", boxShadow: "0 2px 8px rgba(77,90,104,0.35)" }}>
        {icon}<span>{label}</span>
      </button>
    );
  }
  return (
    <button type="button" className="flex items-center justify-center gap-1.5 font-medium"
      style={{ width: "150px", height: "39px", borderRadius: "12.68px", backgroundColor: "#F0F2F6", color: "#4D5A68", fontSize: "13px", fontFamily: "Inter, sans-serif", boxShadow: "0 2px 6px rgba(188,197,224,0.5)" }}>
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}

export function DesktopNav() {
  return (
    <header className="sticky top-0 z-50 hidden bg-white md:block" style={{ borderBottom: "0.76px solid #BCC5E0" }}>
      <div className="mx-auto flex max-w-[1800px] items-center gap-4 px-5 py-3 xl:px-8">
        {/* Logo - SVG from public folder */}
        <div className="shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={120} 
            height={40} 
            priority 
            className="object-contain"
          />
        </div>
        
        <div className="flex min-w-0 max-w-[300px] flex-1 items-center gap-2 rounded-full bg-[#F0F2F6] px-4 py-2" style={{ border: "0.76px solid #BCC5E0" }}>
          <Search className="size-4 shrink-0 text-[#4D5A68]" aria-hidden />
          <span className="min-w-0 flex-1 truncate" style={{ fontSize: "14px", fontWeight: 500, color: "#000000", lineHeight: "24px", fontFamily: "Inter, sans-serif" }}>{SEARCH_QUERY}</span>
          <div className="flex shrink-0 items-center gap-1 pl-3" style={{ borderLeft: "0.76px solid #BCC5E0" }}>
            <span style={{ fontSize: "12.56px", fontWeight: 500, color: "#4D5A68", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>Autor</span>
            <ChevronDown className="size-3 text-[#4D5A68]" aria-hidden />
          </div>
        </div>
        <div className="flex-1" />
        
        {/* Navigation - Hidden on 860px breakpoint (md) */}
        <nav className="hidden xl:flex items-center gap-2" aria-label="Main navigation">
          <NavBtn active label="Feed" icon={<Image src="/right-alignment_10025806 1.svg" alt="" width={17} height={17} aria-hidden />} />
          <NavBtn label="My Profile Analytics" icon={<AnalyticsIcon />} />
          <NavBtn label="Notifications" icon={<BellIcon />} />
        </nav>
        
        {/* Profile Image & Progress Ring - Hidden on 860px breakpoint (md) */}
        <div className="hidden xl:flex shrink-0 items-center gap-2">
          <ProgressRing pct={70} />
          <div className="relative flex shrink-0 items-center justify-center"
            style={{ width: "49.17px", height: "48.83px", borderRadius: "13.62px", padding: "1.5px",
              background: "linear-gradient(135deg, #2688FA, #02DEDD)", boxShadow: "0 2px 8px rgba(38,136,250,0.3)" }}>
            <div className="relative overflow-hidden" style={{ width: "100%", height: "100%", borderRadius: "12px" }}>
              <Image src="/thomas.png" alt="Profile" fill className="object-cover object-top" sizes="50px" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}