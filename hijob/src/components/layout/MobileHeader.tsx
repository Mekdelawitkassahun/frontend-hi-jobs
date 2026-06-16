import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import { SEARCH_QUERY } from "@/lib/data";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white md:hidden" style={{ borderBottom: "0.76px solid #BCC5E0" }}>
      <div className="flex items-center gap-2.5 px-4 py-3">
        <div className="relative size-9 shrink-0 overflow-hidden rounded-full" style={{ border: "1.5px solid #BCC5E0" }}>
          <Image src="/thomas.png" alt="Profile" fill className="object-cover object-top" sizes="36px" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-[#F0F2F6] px-3 py-2" style={{ border: "0.76px solid #BCC5E0" }}>
          <Search className="size-4 shrink-0 text-[#4D5A68]" aria-hidden />
          <span className="min-w-0 flex-1 truncate" style={{ fontSize: "14px", fontWeight: 500, color: "#000000", fontFamily: "Inter, sans-serif" }}>{SEARCH_QUERY}</span>
          <div className="flex shrink-0 items-center gap-0.5 pl-2.5" style={{ borderLeft: "0.76px solid #BCC5E0", fontSize: "12px", color: "#242121" }}>
            <span>Author</span>
            <ChevronDown className="size-3 text-[#4D5A68]" aria-hidden />
          </div>
        </div>
      </div>
    </header>
  );
}
