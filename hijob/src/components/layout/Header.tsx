import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { johnUser, SEARCH_QUERY } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white xl:hidden">
      <div className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-3 md:hidden">
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ backgroundColor: johnUser.avatarColor }}
          >
            {johnUser.initials}
          </span>
        </div>

        <Image src="/logo.svg" alt="Hi JOB" width={100} height={16} className="hidden md:block shrink-0" />

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-page px-3 py-2 md:px-4">
          <Search className="size-4 shrink-0 text-muted" aria-hidden />
          <span className="truncate text-sm text-dark">{SEARCH_QUERY}</span>
        </div>

        <button
          type="button"
          className="hidden shrink-0 rounded-full border border-primary px-4 py-2 text-xs font-medium text-primary sm:inline-flex"
        >
          Edit Search
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative shrink-0 rounded-full border border-border p-2"
        >
          <Bell className="size-5 text-dark" aria-hidden />
          <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}
