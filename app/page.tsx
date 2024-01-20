import { projects } from "@components/Content/projects";
import { work } from "@components/Content/work";
import Hero from "@components/Hero";

import BlogCard from "@components/BlogCard";
import Experience from "@components/Experience";
import NowPlaying from "@components/NowPlaying";
import ProjectCard from "@components/ProjectCard";
import Section from "@components/Section";
import { allPosts } from "contentlayer/generated";
import { Suspense } from "react";

const Home = () => (
  <div className="slide-enter-content">
    <Hero />
    <Section subtitle="Featured Projects">
      <div className=" w-[100%] flex justify-start mt-12 mobile:mt-8 mobile:flex-col mobile:p-0">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Latest Blogs">
      <div className="flex justify-center items-start flex-col mt-6 mobile:mt-4">
        <div className="w-full">
          {allPosts.map((post: any, index: number) => (
            <BlogCard
              key={index}
              {...post}
              slug={post.url}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      </div>
    </Section>

    <Section subtitle="Work">
      <div className=" w-[100%] flex flex-col justify-start mt-12 mobile:mt-8 mobile:p-0 gap-6">
        {work.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </div>
    </Section>

    <div className=" border border-solid hidden my-8 mx-4 py-0 px-6 hover:transition-all hover:ease-in-out hover:border hover:border-solid hover:border-[#fff] mobile:block mobile:rounded-lg mobile:bg-bg-dark mobile:backdrop-blur-m mobile:border-border-dark mobile:mt-0 mobile:p-4 mobile:text-left">
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Server Component */}
        <NowPlaying />
      </Suspense>
    </div>
  </div>
);

export default Home;
