import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src="/images/profile/profile.png"
        alt="Portrait of Aprizal Triansyah"
        width={480}
        height={600}
        className="w-56 h-[280px] object-contain rounded-2xl md:w-80 md:h-[450px] lg:w-[500px] lg:h-[620px]"
        priority
      />
    </div>
  );
}
