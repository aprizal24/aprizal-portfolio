import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-20 pb-16 md:py-20 lg:py-28 xl:py-32">
      <Container>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <HeroContent />
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
