import ConstraintedView from "@/components/layout/constrainted-vew";
import ResponsiveView from "@/components/layout/responsive-view";
import GridView from "@/components/layout/grid-view";
import SectionTitle from "@/components/common/section-title";
import SkillItem from "./components/skill-item";
import skills from "@/data/skills";

const Skills = ({ id }: { id: string }) => {
  return (
    <ResponsiveView
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedView classNames="p-4 py-16">
        <SectionTitle>Skills</SectionTitle>

        <GridView classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
          {skills.map((skill, index) => {
            return <SkillItem key={`skill-${index}`} data={skill} />;
          })}
        </GridView>
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default Skills;
