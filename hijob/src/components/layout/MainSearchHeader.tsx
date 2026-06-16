import { Bell, Search } from "lucide-react";
import { SEARCH_QUERY } from "@/lib/data";

export function MainSearchHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-sm">
        <Search className="size-4 shrink-0 text-muted" aria-hidden />
        <span className="truncate text-sm text-dark">{SEARCH_QUERY}</span>
      </div>
      <button
        type="button"
        className="shrink-0 rounded-full border border-primary bg-white px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
      >
        Edit Search
      </button>
      <button
        type="button"
        aria-label="Notifications"
        className="relative shrink-0 rounded-full border border-border bg-white p-2.5 shadow-sm transition-colors hover:bg-page"
      >
        <Bell className="size-5 text-dark" aria-hidden />
        <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-red-500" />
      </button>
    </div>
  );
}
