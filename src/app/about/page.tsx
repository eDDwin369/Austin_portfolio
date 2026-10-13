import { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "About Austin Paul — Software Engineer",
  description:
    "Professional summary, engineering skills, tools, and career track record of Austin Paul.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Experience />
      <Testimonials />
      <Education />
    </div>
  );
}
