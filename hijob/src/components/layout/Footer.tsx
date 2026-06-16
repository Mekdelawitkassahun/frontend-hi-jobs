import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="bg-white"
      style={{
        borderRadius: "18px",
        border: "0.76px solid #BCC5E0",
        padding: "14px 16px",
        boxShadow: "0 2px 12px rgba(188,197,224,0.18)",
      }}
    >
      {/* Row 1: Logo + Terms/Privacy — always one line */}
      <div className="flex items-center justify-between gap-3">
        <Image src="/logo.svg" alt="Hi JOB" width={70} height={12} className="shrink-0" />
        <nav className="flex shrink-0 items-center gap-1" style={{ fontSize: "12px", color: "#4D5A68", fontFamily: "Inter, sans-serif" }}>
          <a href="#" className="whitespace-nowrap transition-colors hover:text-[#242121]">Terms of Service</a>
          <span aria-hidden style={{ color: "#BCC5E0", margin: "0 2px" }}>•</span>
          <a href="#" className="whitespace-nowrap transition-colors hover:text-[#242121]">Privacy Policy</a>
        </nav>
      </div>

      {/* Divider */}
      <div style={{ height: "0.76px", backgroundColor: "#BCC5E0", margin: "10px 0" }} />

      {/* Row 2: Email + Copyright — always one line */}
      <div className="flex items-center justify-between gap-2">
        <a
          href="mailto:support@hijob.work"
          className="inline-flex shrink-0 items-center gap-1.5 transition-colors hover:opacity-80"
          style={{ fontSize: "11px", fontWeight: 500, color: "#000000", fontFamily: "Inter, sans-serif", lineHeight: "19.12px" }}
        >
          <Image src="/fluent_mail-20-filled.svg" alt="" width={13} height={13} aria-hidden />
          support@hijob.work
        </a>
        <p className="shrink-0 whitespace-nowrap" style={{ fontSize: "10px", fontWeight: 500, color: "#4D5A68", fontFamily: "Inter, sans-serif" }}>
          © 2026 HiJob All rights reserved.
        </p>
      </div>
    </footer>
  );
}