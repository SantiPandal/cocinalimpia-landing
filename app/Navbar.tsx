import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-50 p-4 md:p-6">
      <Image
        src="/images/logo-fumigatucasa-horizontal.png"
        alt="FumigaTuCasa.com"
        width={360}
        height={108}
        className="brightness-0 invert w-[220px] md:w-[360px] h-auto"
        priority
      />
    </div>
  );
}
