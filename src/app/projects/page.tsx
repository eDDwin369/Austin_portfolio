import { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects & Mobile Applications | Austin Paul",
  description:
    "Explore mobile applications, consumer utilities, and cloud integrations engineered by Austin Paul.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectGrid showFilters={true} />
    </div>
  );
}
