import Image from "next/image";

function DotsNav() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image src="/slide.svg" alt="Navigate slides" width={44} height={10} aria-label="slide navigation" />
    </div>
  );
}

export function PartnersPromotions() {
  return (
    <section className="bg-white"
      style={{ borderRadius: "18px", border: "0.76px solid #BCC5E0", padding: "14px",
        boxShadow: "0 2px 12px rgba(188,197,224,0.18)", fontFamily: "Inter, sans-serif" }}
      aria-labelledby="partners-heading">
      <h2 id="partners-heading" className="mb-3"
        style={{ fontSize: "14px", fontWeight: 500, color: "#4E5D78" }}>
        Partners Promotions
      </h2>

      {/* Banner — 391×905 at 1920px per Figma, fluid aspect ratio */}
      <div className="relative overflow-hidden" style={{ borderRadius: "18px", aspectRatio: "391 / 520" }}>
        <Image src="/promo-nextgen.png" alt="Next-Gen Features Coming Soon"
          fill className="object-cover object-center"
          sizes="(max-width: 860px) 100vw, (max-width: 1440px) 300px, 391px" priority />

        {/* Logo centered top */}
        <div className="absolute left-0 right-0 top-4 z-10 flex justify-center">
          <Image src="/logo.svg" alt="Hi JOB" width={72} height={12} className="brightness-0 invert" />
        </div>

        {/* Gradient */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(5,12,30,0.95) 0%, rgba(5,12,30,0.5) 35%, transparent 58%)",
        }} />

        {/* Text + dots */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-3">
          {/* Reduced height makes the SVG text render smaller */}
          <div className="relative w-full" style={{ height: "72px" }}>
            <Image
              src="/Next-Gen Features Coming Soon.svg"
              alt="Next-Gen Features Coming Soon"
              fill
              className="object-contain object-left-bottom"
            />
          </div>
          <div className="mt-2">
            <DotsNav />
          </div>
        </div>
      </div>
    </section>
  );
}
