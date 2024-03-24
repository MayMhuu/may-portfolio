import ConstraintedView from "@/components/layout/constrainted-vew";
import ResponsiveView from "@/components/layout/responsive-view";
import GridView from "@/components/layout/grid-view";
import SectionTitle from "@/components/common/section-title";
import ProjectList from "./components/project-list";
import projects from "@/data/projects";

const Projects = ({ id }: { id: string }) => {
  return (
    <ResponsiveView

      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedView classNames="p-4 py-16">
        <SectionTitle>Projects</SectionTitle>
        <ProjectList projects={projects} />
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default Projects;
