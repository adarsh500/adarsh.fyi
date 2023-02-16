import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from './Blog.module.scss';

const MyButton: React.FC = () => <button>Click me</button>;

const PostLayout = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className={styles.main}>
      <Head>
        <title>{post.title}</title>
      </Head>
      {/* <article className="mx-auto max-w-2xl py-16"> */}
      <article className={styles.container}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.subRow}>
          <time dateTime={post.date} className={styles.time}>
            Adarsh Sulegai / {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <p className={styles.readingTime}>{post.readingTime.text}</p>
        </div>

        <div className={styles.blog}>
          <MDXContent components={{ MyButton }} />
        </div>
      </article>
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
