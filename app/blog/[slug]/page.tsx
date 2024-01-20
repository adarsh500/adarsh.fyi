import BlurImage from "@components/BlurImage";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import styles from "../blog.module.scss";

export const dynamic = "force-static";

const PostLayout = ({ params }: any) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  const thumbnailPath = `/${params.slug}/${params.slug}.png`;

  if (!post) {
    return notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main
      className="flex flex-col justify-center break-words relative flex-1 
      text-xl my-14 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:my-12 mobile:text-lg "
    >
      <BlurImage
        width={760}
        height={300}
        src={thumbnailPath}
        alt="thumbnail"
        // objectFit="contain"
        aspectRatio="auto 1042 / 401"
        priority
        loading="eager"
      />
      <article className="flex flex-1 mt-8 justify-start items-start flex-col">
        <p className="text-6xl font-extrabold mobile:text-4xl mobile:font-bold">
          <Balancer>{post.title}</Balancer>
        </p>
        <div className="mt-3 w-full flex justify-between items-center text-light-secondary dark:text-dark-secondary">
          <time dateTime={post.date} className="text-lg font-semibold">
            Adarsh Sulegai / {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <p className="text-lg font-normal">{post.readingTime.text}</p>
        </div>

        <div className={styles.blog}>
          <MDXContent components={{ Image: BlurImage }} />
        </div>
      </article>
    </main>
  );
};

export default PostLayout;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) {
    return;
  }

  const { title, description } = post;

  return {
    title,
    description,
  };
}
