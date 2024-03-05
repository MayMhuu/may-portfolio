import { ISkillListItem, SkillLevel } from "@/interfaces";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs-13.svg",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "Tailwind",
        level: SkillLevel.Intermediate,
        icon: "/skills/tailwind.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
    
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Asp.Net",
        level: SkillLevel.Expert,
        icon: "/skills/aspnet.svg",
      },
      {
        title: "C#",
        level: SkillLevel.Expert,
        icon: "/skills/c-sharp.svg",
      },
      {
        title: "GraphQL",
        level: SkillLevel.Begginer,
        icon: "/skills/graphql.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MS SQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/microsoft-sql-server.svg",
      },
      {
        title: "Apollo",
        level: SkillLevel.Intermediate,
        icon: "/skills/apollo-graphql-compact.svg",
      }
    ],
  },
  {
    title: "Version Control Systems",
    items: [
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Redux",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "Swr",
        level: SkillLevel.Expert,
        icon: "/skills/SWR_dark.svg",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Vercel",
        level: SkillLevel.Intermediate,
        icon: "/skills/vercel.svg",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
      {
        title: "Project Management",
        level: SkillLevel.Expert,
        icon: "/images/project-management.svg",
      },
    ],
  },
];

export default skills;
