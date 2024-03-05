import {
  faGlobe,
  faServer,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/interfaces";

const services: IServiceItem[] = [
  {
    title: "Web Development",
    icon: faGlobe,
    shortDescription:
      "I deliver visually stunning and user-friendly web designs in the financial industry.",
    description:
      "Using the latest frameworks and technologies, I create responsive, SEO-friendly websites that offer a seamless browsing experience on all devices.Joined with web designers to develop user interfaces and prototypes for a web-based internal financial manager system.",
  },
  {
    title: "Backend Development",
    icon: faServer,
    shortDescription:
      "I enhance your digital applications with a robust and scalable backend infrastructure.",
    description:
      "I enhance your digital applications with a robust and scalable backend infrastructure. With expertise in backend development, I create efficient database structures, develop APIs, and configure servers to ensure optimal performance, security, and scalability. My solutions empower your applications to seamlessly handle high traffic and complex data management.",
  },
  {
    title: "Project Management",
    icon: faDiagramProject,
    shortDescription:
      "Managed a team of 6 to develop and lanuch four successful products.",
    description:
      "Implemented successful call center operations and IT services initiatives.Streamlined the process of requirements gathering from both technical and business stakeholders, shortening project initiation timelines by 15%.",
  },
];

export default services;
