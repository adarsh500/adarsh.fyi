import styles from './Blog.module.scss';
import BlogCard from '@components/BlogCard';
import readingTime from 'reading-time';
import Head from 'next/head';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export default function Blog({ posts }: any) {
  return (
    <main className={styles.main}>
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>Blogs</p>
        <div className={styles.blogs}>
          {posts.map((post: any) => (
            <>
              <BlogCard
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

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
