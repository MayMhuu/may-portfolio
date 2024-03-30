"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ResponsiveView from "../layout/responsive-view";
import ConstraintedView from "../layout/constrainted-vew";
import Row from "../layout/row";
import Column from "../layout/column";
import AppBar from "../common/app-bar";
import ScreenshotGallery from "./components/ScreenshotGallery";
import { getProjectDetails } from "@/data/projects";
import { ProjectType } from "@/interfaces";

const ProjectsSection1 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const project = getProjectDetails(searchParams.get("id")!);

  const renderProjectType = (type?: ProjectType) => {
    switch (type) {
      case ProjectType.Personal:
        return "Personal Project";

      case ProjectType.JobWork:
        return "Job Work";

      case ProjectType.Freelance:
        return "Freelance Project";

      default:
        return null;
    }
  };

  return (
    <ResponsiveView classNames="bg-[var(--dialogColor)]" id={id}>
      <ConstraintedView classNames="p-4">
        <AppBar>
          {project ? (
            <Row classNames="items-center gap-2">
              <Row classNames=" bg-var(--primaryColor20)] w-[3rem] md:w-[3.5rem] p-2 aspect-square items-center justify-center border border-[var(--textColor30)] rounded-full overflow-hidden">

                <Image
                  src={project.icon}
                  alt={`project-${project.title}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  className="w-full h-full object-cover  border border-[var(--secondaryColor10)] rounded-[var(--borderRadius)] "
                />

              </Row>

              <Column>
                <p className="text-lg/6 font-semibold">{project?.title}</p>
                <p className="text-base/6 text-[var(--textColorLight)]">
                  {renderProjectType(project.projectType)}
                </p>
              </Column>
            </Row>
          ) : null}
        </AppBar>

        {project && project.sceenshots && project.sceenshots.length > 0 ? (
          <ScreenshotGallery imageList={project.sceenshots} />
        ) : null}
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default ProjectsSection1;
