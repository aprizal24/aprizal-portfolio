import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import Container from "@/components/layout/Container";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[#F8FAFF] py-16 md:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          <AboutHeader />
          <div className="mt-5 md:mt-16 grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 md:gap-12 lg:gap-20 items-start">
            <AboutContent />
            <div className="w-full max-w-[700px]">
              <p className="text-base md:text-lg leading-7 md:leading-10 text-neutral-800">
                Hi, I&apos;m Aprizal Triansyah, a UI/UX Designer based in Lombok, Indonesia. I enjoy designing simple, intuitive, and thoughtful digital experiences that solve real user problems.
              </p>
              <p className="mt-4 md:mt-5 text-base md:text-lg leading-7 md:leading-10 text-neutral-800">
                My journey into design started with a curiosity about how thoughtful interfaces can simplify everyday interactions. Through personal projects, I've been developing my skills in user experience, interface design, and design systems while continuously learning and refining my design process.
              </p>
              <p className="mt-4 md:mt-5 text-base md:text-lg leading-7 md:leading-10 text-neutral-800">
                I believe great design is not only visually appealing but also functional, accessible, and built around real user needs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
