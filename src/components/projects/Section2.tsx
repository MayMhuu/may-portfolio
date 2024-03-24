"use client";

import { useSearchParams } from "next/navigation";
import ResponsiveView from "../layout/responsive-view";
import ConstraintedView from "../layout/constrainted-vew";
import { getProjectDetails } from "@/data/projects";

const ProjectsSection2 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const description = getProjectDetails(searchParams.get("id")!)?.description;

  return (
    <ResponsiveView id={id}>
      <ConstraintedView classNames="p-10 text-center">
        <p>{description}</p>
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default ProjectsSection2;
