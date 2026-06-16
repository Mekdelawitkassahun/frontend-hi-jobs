import Image from "next/image";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: "100px", height: "84px" }}>
        <Image
          src="/ion_people.svg"
          alt="No results"
          fill
          className="object-contain"
          sizes="100px"
        />
      </div>

      <p className="mt-5" style={{
        fontSize: "16.04px",
        fontWeight: 600,
        color: "#4D5A68",
        lineHeight: "28.51px",
        fontFamily: "Inter, sans-serif"
      }}>
        No results found
      </p>

      <button type="button"
        className="mt-5 flex items-center justify-center transition-colors hover:bg-[#F0F2F6]"
        style={{ width: "252px", height: "30px", borderRadius: "9.42px",
          border: "0.76px solid #D7DAE2", backgroundColor: "#FFFFFF",
          fontSize: "13px", fontWeight: 500, color: "#2688FA", fontFamily: "Inter, sans-serif" }}>
        Edit Search
      </button>
    </div>
  );
}
