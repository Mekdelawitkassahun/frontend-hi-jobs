import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { EmptyState } from "@/components/search/EmptyState";
import { PartnersPromotions } from "@/components/promotions/PartnersPromotions";
import { TalentsPromotions } from "@/components/promotions/TalentsPromotions";
import { profiles } from "@/lib/data";

export default function HomePage() {
  const featured = profiles.find((p) => p.featured)!;

  return (
    <div className="flex min-h-screen flex-col">
      <DesktopNav />
      <MobileHeader />

      <div className="mx-auto w-full max-w-[1800px] flex-1 px-4 pb-24 pt-5
        md:px-6 md:pb-8 md:pt-6
        xl:px-10 xl:pb-10 xl:pt-7
        2xl:px-16 2xl:pt-8">

        <div className="grid grid-cols-1 gap-4
          md:grid-cols-[275px_1fr] md:items-start md:gap-5
          xl:grid-cols-[275px_1fr_300px] xl:gap-6
          2xl:grid-cols-[300px_1fr_340px] 2xl:gap-7">

          {/* LEFT — profile card — pulled toward center */}
          <aside className="hidden md:block translate-x-4 lg:translate-x-8 xl:translate-x-50">
            <ProfileCard profile={featured} />
          </aside>

          {/* CENTER — No results found moved downward on 1020px */}
          <main className="pt-16 md:pt-20 xl:pt-30 2xl:pt-40">
            <EmptyState />
          </main>

          {/* RIGHT — Partners/Talents/Footer — pulled toward center */}
          <aside className="flex flex-col gap-4 md:col-span-2 md:gap-5 xl:col-span-1 xl:gap-4 2xl:gap-5 -translate-x-4 lg:-translate-x-8 xl:-translate-x-50">
            <PartnersPromotions />
            <TalentsPromotions />
            <Footer />
          </aside>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}