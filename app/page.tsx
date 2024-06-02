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
      <div className=" w-[100%] flex justify-start my-12 mobile:mt-8 mobile:flex-col mobile:p-0">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Latest Blogs">
      <div className="flex justify-center items-start flex-col my-6 mobile:mt-4 mobile:mb-2">
        {allPosts.map((post: any, index: number) => (
          <BlogCard
            key={index}
            {...post}
            slug={post.url}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </Section>

    <Section subtitle="Work">
      <ol className="relative border-s border-zinc-600">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-8 -start-1.5 border border-zinc-900 bg-green-500"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Application UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
      <div className="w-[100%] flex flex-col justify-start my-12 mobile:mt-8 mobile:p-0 gap-6">
        {work.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </div>
    </Section>

    <div className="border border-solid hidden my-8 mx-4 py-0 px-6 hover:transition-all hover:ease-in-out hover:border hover:border-solid hover:border-[#fff] mobile:block mobile:rounded-lg mobile:bg-bg-dark mobile:backdrop-blur-m mobile:border-border-dark mobile:mt-0 mobile:p-4 mobile:text-left">
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Server Component */}
        <NowPlaying />
      </Suspense>
    </div>
  </div>
);

export default Home;
