import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-50 p-6">
      <Image
        src="/images/logo-cocinalimpia-bueno-horizontal.png"
        alt="CocinaLimpia.mx"
        width={240}
        height={72}
        className="brightness-0 invert"
        priority
      />
    </div>
  );
}
