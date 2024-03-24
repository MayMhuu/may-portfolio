import { Suspense } from "react";
import Main from "@/components/layout/main";

import ProjectsSection1 from "@/components/projects/Section1";
import ProjectsSection2 from "@/components/projects/Section2";
import Modal from "@/components/layout/modal";
import GalleryView from "@/components/common/gallery-view";
import SectionTitle from "@/components/common/section-title";

const ProjectDetails = ({
  params,
  searchParams,
}: Readonly<{ params: any; searchParams: any }>) => {
  return (
    <>
      <Main>
        <Suspense>
          <ProjectsSection2 />
          <ProjectsSection1 />

        </Suspense>
      </Main>

      {!!searchParams.imgSrc ? (
        <Modal closeHref={`/projects?id=${searchParams.id}`}>
          <Suspense>
            <SectionTitle>{searchParams.description}</SectionTitle>
            <GalleryView src={searchParams.imgSrc} />
          </Suspense>
        </Modal>
      ) : null}
    </>
  );
};

export default ProjectDetails;
