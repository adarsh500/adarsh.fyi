import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "../blog.module.scss";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

export const dynamic = "force-static";

const RoundedImage = (props: any) => (
  <div className={styles.imageContainer}>
    <Image {...props} className="rounded-lg" />
  </div>
);

const PostLayout = ({ params }: any) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  const thumbnailPath = `/${params.slug}/${params.slug}.png`;

  if (!post) {
    return notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className={styles.main}>
      <RoundedImage
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          aspectRatio: "auto 1042 / 401",
        }}
        className={styles.image}
        width={2084 / 2}
        height={802 / 2}
        src={thumbnailPath}
        alt="thumbnail"
        priority
      />
      <article className={styles.container}>
        <p className={styles.title}>
          <Balancer>{post.title}</Balancer>
        </p>
        <div className={styles.subRow}>
          <time dateTime={post.date} className={styles.time}>
            Adarsh Sulegai / {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <p className={styles.readingTime}>{post.readingTime.text}</p>
        </div>

        <div className={styles.blog}>
          <MDXContent components={{ Image: RoundedImage }} />
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
