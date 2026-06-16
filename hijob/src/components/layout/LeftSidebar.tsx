import { Bell, ChevronDown, LayoutList, Search, User } from "lucide-react";
import Image from "next/image";
import { johnUser, sidebarNav } from "@/lib/data";
import { cn } from "@/lib/utils";

const navIcons: Record<string, typeof LayoutList> = {
  feed: LayoutList,
  profile: User,
  analytics: LayoutList,
  notifications: Bell,
};

export function LeftSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] flex-col border-r border-border bg-white xl:flex">
      <div className="border-b border-border px-6 py-5">
        <Image src="/logo.svg" alt="Hi JOB" width={100} height={16} className="text-2xl" />
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Sidebar navigation">
        {sidebarNav.map((item) => {
          if (item.type === "user") {
            return (
              <button
                key={item.id}
                type="button"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-dark transition-colors hover:bg-page"
              >
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: johnUser.avatarColor }}
                >
                  {johnUser.initials}
                </span>
                {item.label}
              </button>
            );
          }

          if (item.id === "author") {
            return (
              <button
                key={item.id}
                type="button"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-dark transition-colors hover:bg-page"
              >
                <Search className="size-4 shrink-0 text-muted" aria-hidden />
                {item.label}
                <ChevronDown className="ml-auto size-4 text-muted" aria-hidden />
              </button>
            );
          }

          const Icon = navIcons[item.id] ?? LayoutList;
          const active = "active" in item && item.active;

          return (
            <button
              key={item.id}
              type="button"
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-white"
                  : "text-dark hover:bg-page",
              )}
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {item.label}
              {item.id === "notifications" && (
                <span className="ml-auto size-2 rounded-full bg-red-500" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
