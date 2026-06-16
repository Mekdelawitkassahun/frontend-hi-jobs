import Image from "next/image";
import { talentPromotions, type TalentPromo } from "@/lib/data";

function TalentCard({ talent }: { talent: TalentPromo }) {
  return (
    <article
      className="flex flex-col overflow-hidden bg-white"
      style={{
        borderRadius: "12px",
        border: "0.76px solid #BCC5E0",
        boxShadow: "0 1px 6px rgba(188,197,224,0.2)",
        aspectRatio: "170 / 227",
      }}
    >
      {/* Photo — fills full card, no logo header */}
      <div className="relative min-h-0 flex-1">
        <Image
          src={talent.photo}
          alt={talent.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 860px) 50vw, 170px"
        />
      </div>
    </article>
  );
}

export function TalentsPromotions() {
  return (
    <section
      className="hidden xl:block bg-white"  // hidden at ≤860px, visible at 1440px+
      style={{
        borderRadius: "18px",
        border: "0.76px solid #BCC5E0",
        padding: "14px",
        boxShadow: "0 2px 12px rgba(188,197,224,0.18)",
        fontFamily: "Inter, sans-serif",
      }}
      aria-labelledby="talents-heading"
    >
      <h2
        id="talents-heading"
        className="mb-3"
        style={{ fontSize: "14px", fontWeight: 500, color: "#4E5D78" }}
      >
        Talents Promotions
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {talentPromotions.map((t) => (
          <TalentCard key={t.id} talent={t} />
        ))}
      </div>
    </section>
  );
}