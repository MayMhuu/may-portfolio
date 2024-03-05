import { IProjectItem, ProjectType, RepoType } from "@/interfaces";

const projects: IProjectItem[] = [
  {
    id: "restaurant",
    title: "Restaurant App",
    description: "",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["react"],
    sceenshots: ["/screenshots/restaurant.png"],
  },

];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
