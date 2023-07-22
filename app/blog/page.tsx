import { allPosts } from "contentlayer/generated";
import BlogCard from "@components/BlogCard";

export default function Blog() {
  return (
    <main className="flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:mt-12 mobile:mb-20 mobile:text-base">
      <div className="flex justify-center items-start flex-col animate-fadeInUp w-full">
        <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold">
          Blogs
        </p>
        <div className="w-full mt-8 mobile:mt-1">
          {allPosts.map((post: any, index: number) => (
            <>
              <BlogCard
                key={index}
                {...post}
                slug={post.url}
                readingTime={post.readingTime}
              />
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
