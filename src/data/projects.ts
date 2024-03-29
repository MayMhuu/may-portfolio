import { IProjectItem, ProjectType, RepoType } from "@/interfaces";

const projects: IProjectItem[] = [
  {
    id: "bnpl",
    title: "Buy Now Pay Later",
    shortDescription:"Buy now, pay later (BNPL) is a type of short-term financing that allows consumers to make purchases and pay for them over time, usually with no interest.",
    description: "Buy now, pay later (BNPL) is a type of short-term financing that allows consumers to make purchases and pay for them over time, usually with no interest.This new year, AYA Pay has collaborated with SAMSUNG and launched BNPL (Buy Now Pay Later), which is an installment plan for purchasing SAMSUNG devices through AYA Pay, on January 14, 2023.Nowadays AYA Pay plans on introducing additional mobile phones and smart phones in collaboration with ATOM and Ooredoo. Users will have two choices; make a down payment of the selected mobile phone, which can be paid through AYA Pay’s payment gateway or follow the existing BNPL application process.​",
    icon: "/images/bnplLogo.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "",
    tags: ["next","tailwind","node"],
    sceenshots:[{
      url:"/services/bnpl.jpg",
      description:"How to apply "
    },{
      url:"/services/bnplProcess.png",
      description:"Process Flow"
    },{
      url:"/services/bnplSystem.png",
      description:"System Diagram"
    },
    {
      url:"/services/bnplPortal.png",
      description:"How to management"
    }]
  },
  {
    id: "virtual",
    title: "Virtual Visa Prepaid Card",
    shortDescription:"AYA Pay - instant approval Virtual Visa Prepaid Card!!! Perfect for your digital transactions, e-commerce purchases, subscriptions, and more!!!",
    description: "AYA Pay - instant approval Virtual Visa Prepaid Card!!! Perfect for your digital transactions, e-commerce purchases, subscriptions, and more!!!",
    icon: "/images/virtuaIcon.jpg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "",
    tags: ["next","tailwind","node-red","node"],
    sceenshots:[{
      url:"/services/cardDetail.jpg",
      description:"How to use "
    },{
      url:"/services/virtualCard.jpg",
      description:"How to register"
    },{
      url:"/services/virtualFlow.png",
      description:"User Journey Flow"
    },
    {
      url:"/services/prepaid.png",
      description:"How to management"
    }]
  },
  {
    id: "credit",
    title: "Credit Card Application",
    shortDescription: "Visit any of our branches for application and submit with required documents. Bank will notify on your credit card approval and for card collection",
    description: "AYA's innovation product, the Credit Card is designed to help customers who wants or needs a credit card without having to go through complex paperwork process. As opposed to applying a normal credit card, where proof of income or a guarantor is a prerequisite.For JCB Credit Card, We connect your financial life to your daily life. For Visa Credit Card, It's everywhere You Want to Be.",
    icon: "/images/creditLogo.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "",
    tags: ["next","tailwind","node"],
    sceenshots:[{
      url:"/services/ccbpDetail.jpeg",
      description:"How to use "
    },{
      url:"/services/creditCard.jpg",
      description:"How to register"
    },{
      url:"/services/ccbpflow.png",
      description:"User Journey Flow"
    },
    {
      url:"/services/credit.png",
      description:"How to management "
    }]
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
