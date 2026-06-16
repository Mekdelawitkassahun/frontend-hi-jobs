import Image from "next/image";
import type { Profile } from "@/lib/data";

function Divider() {
  return <div style={{ width: "100%", height: "5px", borderRadius: "29px", backgroundColor: "#D7DAE2", margin: "5px 0" }} />;
}

function MailIcon() {
  return (
    <Image src="/envelop.svg" alt="" width={18} height={14} className="shrink-0" aria-hidden />
  );
}

function EyeSlashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <path d="M2 2L14 14" stroke="#BCC5E0" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6.5 6.8A2 2 0 0 0 6 8a2 2 0 0 0 3.3 1.5" stroke="#BCC5E0" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 4.2C2.6 5.2 2 7 2 8c0 1 2.2 4 6 4 1.1 0 2-.3 2.8-.7" stroke="#BCC5E0" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.7 9.9C10.6 9.3 11.5 8.5 12.2 8 12.2 8 10 4 6 4c-.4 0-.9.05-1.3.12" stroke="#BCC5E0" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Forward/share icon from majesticons_share-line.svg */
function ShareIcon() {
  return (
    <Image src="/majesticons_share-line.svg" alt="" width={16} height={16} aria-hidden />
  );
}

/** PDF icon from pdf1.svg */
function FileIcon() {
  return (
    <Image src="/pdf1.svg" alt="" width={16} height={16} aria-hidden />
  );
}

type Props = { profile: Profile };

export function ProfileCard({ profile }: Props) {
  return (
    <article
      className="flex flex-col bg-white"
      style={{
        width: "100%", minHeight: "520px", borderRadius: "18px",
        border: "0.76px solid #BCC5E0", padding: "20px",
        boxShadow: "0 2px 12px rgba(188,197,224,0.18)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Photo */}
      <div className="mb-3 flex justify-center">
        {profile.photo ? (
          <div className="relative overflow-hidden" style={{ width: "120px", height: "120px", borderRadius: "16px" }}>
            <Image src={profile.photo} alt={profile.name} fill className="object-cover object-top" sizes="120px" priority />
          </div>
        ) : (
          <div className="flex items-center justify-center text-3xl font-bold text-white"
            style={{ width: "120px", height: "120px", borderRadius: "16px", backgroundColor: profile.avatarColor }}>
            {profile.initials}
          </div>
        )}
      </div>

      {/* Name - UPDATED: color #1C2434, weight 500, line-height 100% */}
      <p className="text-center" style={{ fontSize: "22px", fontWeight: 500, color: "#1C2434", lineHeight: 1 }}>
        {profile.name}
      </p>

      {/* Title */}
      <p className="mt-1 text-center" style={{ fontSize: "14px", fontWeight: 500, color: "#8D949C", lineHeight: 1 }}>
        {profile.title} over {profile.experience}
      </p>

      <div style={{ marginTop: "14px" }}><Divider /></div>

      {/* Rows */}
      <ul style={{ fontSize: "14px" }}>
        {/* Location */}
        <li className="flex items-center gap-2.5 py-2" style={{ color: "#242121" }}>
          <Image src="/tdesign_location-filled.svg" alt="" width={16} height={16} className="shrink-0" aria-hidden />
          <span>{profile.location}</span>
        </li>
        <Divider />

        {/* Work type */}
        <li className="flex items-center gap-2.5 py-2" style={{ color: "#242121" }}>
          <Image src="/remote1.svg" alt="" width={16} height={16} className="shrink-0" aria-hidden />
          <span>{profile.workType}</span>
          <span style={{ color: "#D7DAE2", margin: "0 4px" }}>|</span>
          <span>{profile.jobType}</span>
        </li>
        <Divider />

        {/* Email */}
        <li className="flex items-center gap-2.5 py-2" style={{ color: "#242121" }}>
          <MailIcon />
          <span className="flex-1 truncate">{profile.email}</span>
          <EyeSlashIcon />
        </li>
      </ul>

      <div style={{ marginTop: "4px" }}><Divider /></div>

      {/* QR + Buttons */}
      <div className="mt-3 flex items-center gap-2">
        <div className="relative shrink-0 overflow-hidden" style={{ width: "54px", height: "54px", borderRadius: "8px" }}>
          <Image src="/qr-code.png" alt="QR code" fill className="object-cover" sizes="54px" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <button type="button"
            className="relative flex items-center overflow-hidden text-white transition-opacity hover:opacity-90"
            style={{ height: "32px", borderRadius: "9.42px", backgroundColor: "#2688FA", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            <span className="flex-1 text-center pl-2">Share Profile</span>
            <span className="flex h-full shrink-0 items-center justify-center"
              style={{ width: "32px", backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "0 9.42px 9.42px 0" }}>
              <ShareIcon />
            </span>
          </button>

          <button type="button"
            className="relative flex items-center overflow-hidden text-white transition-opacity hover:opacity-90"
            style={{ height: "32px", borderRadius: "9.42px", backgroundColor: "#4D5A68", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            <span className="flex-1 text-center pl-2">Download PDF</span>
            <span className="flex h-full shrink-0 items-center justify-center"
              style={{ width: "32px", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "0 9.42px 9.42px 0" }}>
              <FileIcon />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}