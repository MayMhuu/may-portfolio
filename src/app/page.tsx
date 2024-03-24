import { Suspense } from "react";
import Main from "@/components/layout/main";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Experiences from "@/components/home/experices";
import Skills from "@/components/home/skills";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const Home = () => {
  return (
    <Main>
      <Suspense>
        <About id="about" />
        <Services id="services" />
        <Experiences id="experiences" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </Suspense>
    </Main>
  );
};

export default Home;
