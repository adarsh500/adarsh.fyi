import { projects } from "@components/Content/projects";
import { skills } from "@components/Content/skills";
import { work } from "@components/Content/work";
import Hero from "@components/Hero";

import Experience from "@components/Experience";
import NowPlaying from "@components/NowPlaying";
import ProjectCard from "@components/ProjectCard";
import Section from "@components/Section";
import TechCard from "@components/TechCard";

const Home = () => (
  <>
    <Hero />
    <Section subtitle="Featured Projects">
      <div className="w-[100%] flex justify-start mt-12 mobile:flex-col mobile:p-0">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Tech I work with">
      <div className="w-[100%] my-12 flex flex-wrap justify-between">
        {skills.map((skill, index) => (
          <TechCard {...skill} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Work">
      <div className="w-[100%] flex flex-col justify-start mt-12 mobile:p-0">
        {work.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </div>
    </Section>

    <div className="border border-solid hidden my-8 mx-4 py-0 px-6 hover:transition-all hover:ease-in-out hover:border hover:border-solid hover:border-[#fff] mobile:block mobile:rounded-lg mobile:bg-bg-dark mobile:backdrop-blur-m mobile:border-border-dark mobile:mt-0 mobile:p-4 mobile:text-left">
      <NowPlaying />
    </div>
  </>
);

export default Home;
