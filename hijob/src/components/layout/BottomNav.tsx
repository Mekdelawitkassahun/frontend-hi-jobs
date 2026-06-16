import Image from "next/image";
import { mobileNavItems } from "@/lib/data";

const iconSrc: Record<string, string> = {
  feed:         "/right-alignment_10025806 1.svg",
  analytics:    "/health.svg",
  notification: "/notification.svg",
  profile:      "/ion_people.svg",
};

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      style={{ borderTop: "0.76px solid #BCC5E0" }}
      aria-label="Main navigation"
    >
      <ul className="flex items-stretch justify-around">
        {mobileNavItems.map((item) => {
          const active = "active" in item && item.active;
          const src = iconSrc[item.icon] ?? "/ion_people.svg";
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                className="relative flex w-full flex-col items-center gap-1 py-2.5 transition-colors"
                style={{ fontSize: "11px", fontWeight: 500, color: active ? "#2688FA" : "#4D5A68" }}
              >
                {active && (
                  <span
                    className="absolute inset-x-6 top-0 rounded-full"
                    style={{ height: "2px", backgroundColor: "#2688FA" }}
                  />
                )}
                <Image
                  src={src}
                  alt={item.label}
                  width={22}
                  height={22}
                  style={{ opacity: active ? 1 : 0.6 }}
                />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
