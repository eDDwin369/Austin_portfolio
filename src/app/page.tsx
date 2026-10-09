import { Hero } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
