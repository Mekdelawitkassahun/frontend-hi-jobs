import Image from "next/image";

function Dots({ count = 4, active = 0 }: { count?: number; active?: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="rounded-full"
          style={{
            width:  i === active ? "18px" : "6px",
            height: "6px",
            backgroundColor: i === active ? "#ffffff" : "rgba(255,255,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}

export function MobileFeatures() {
  return (
    <section
      className="bg-card shadow-sm"
      style={{ border: "0.76px solid #BCC5E0", borderRadius: "18px", padding: "14px" }}
      aria-labelledby="mobile-features-heading"
    >
      <h2
        id="mobile-features-heading"
        className="mb-3 font-semibold"
        style={{ fontSize: "14px", color: "#242121" }}
      >
        Features
      </h2>

      {/* Banner — same image as Partners Promotions, full width on mobile */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "14px", aspectRatio: "391 / 477" }}
      >
        <Image
          src="/promo-nextgen.png"
          alt="Next-Gen Features Coming Soon"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.3) 45%, transparent 70%)",
          }}
        />

        <div className="absolute right-4 top-3 z-10">
          <Image src="/logo.svg" alt="Hi JOB" width={60} height={10} className="brightness-0 invert" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4">
          <p
            className="font-black uppercase leading-tight tracking-wide text-white drop-shadow-lg"
            style={{ fontSize: "22px" }}
          >
            NEXT-GEN
            <br />
            FEATURES
            <br />
            COMING SOON
          </p>
          <div className="mt-3">
            <Dots count={4} active={0} />
          </div>
        </div>
      </div>
    </section>
  );
}
