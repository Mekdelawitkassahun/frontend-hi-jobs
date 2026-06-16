import { profiles } from "@/lib/data";
import { ProfileCard } from "@/components/profile/ProfileCard";

export function ProfileCardsGrid() {
  return (
    <section aria-labelledby="profiles-heading">
      <h2 id="profiles-heading" className="sr-only">
        Profile Cards
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
}
