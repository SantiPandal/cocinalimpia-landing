import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-50 p-4 md:p-6">
      <Image
        src="/images/logo-fumigatucasa-horizontal.png"
        alt="FumigaTuCasa.com"
        width={240}
        height={72}
        className="brightness-0 invert w-[160px] md:w-[240px] h-auto"
        priority
      />
    </div>
  );
}
