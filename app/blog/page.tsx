import { allPosts } from "contentlayer/generated";
import BlogCard from "@components/BlogCard";

export default function Blog() {
  return (
    <main
      className="slide-enter-content flex justify-start items-start flex-col break-words text-xl text-left 
    mt-20 mb-16 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 
    mobile:mt-6 mobile:mb-10 mobile:text-base"
    >
      <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-12 mobile:mb-8">
        Blogs
      </p>
      <div className="flex justify-center items-start flex-col w-full mb-6 mobile:mb-4">
        {allPosts.map((post: any, index: number) => (
          <BlogCard
            key={index}
            {...post}
            slug={post.url}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </main>
  );
}
