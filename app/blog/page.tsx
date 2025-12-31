import { allPosts } from "contentlayer/generated";
import BlogCard from "@components/BlogCard";
import PageLayout from "@components/PageLayout";

export default function Blog() {
  return (
    <PageLayout title="Blogs">
      <div className="slide-enter-content flex justify-center items-start flex-col w-full mb-6 mobile:mb-4 mt-8 mobile:mt-4">
        {allPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post: any, index: number) => (
            <BlogCard
              key={index}
              {...post}
              slug={post.url}
              readingTime={post.readingTime}
            />
          ))}
      </div>
    </PageLayout>
  );
}
