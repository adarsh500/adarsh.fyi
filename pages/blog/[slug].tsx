import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import styles from './Blog.module.scss';

const PostLayout = ({ post }: any) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>{post.title}</title>
      </Head>
      {/* <article className="mx-auto max-w-2xl py-16"> */}
      <article className={styles.container}>
        <p className={styles.title}>{post.title}</p>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div
          className={styles.blogs}
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        ></div>
      </article>
      {/* <div className="mb-6 text-center"></div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          
        </div>
        <div
          className="cl-post-body"
        />
      </article> */}
    </main>
  );
};

export default PostLayout;

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}
