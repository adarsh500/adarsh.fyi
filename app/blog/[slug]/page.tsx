import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from '../blog.module.scss';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const MyButton: React.FC = () => <button>Click me</button>;

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const thumbnailPath = `/${params.slug}/${params.slug}.png`;

  if (!post) {
    return notFound();
  }
  console.log(params);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className={styles.main}>
      <Head>
        <title>{post.title}</title>
      </Head>
      {/* <div className={styles.subHeader}>Blog</div> */}
      <Image
        style={{
          maxWidth: '100%',
          objectFit: 'contain',
          aspectRatio: 'auto 1042 / 401',
        }}
        className={styles.image}
        width={2084 / 2}
        height={802 / 2}
        src={thumbnailPath}
        alt="thumbnail"
        priority
      />
      <article className={styles.container}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.subRow}>
          <time dateTime={post.date} className={styles.time}>
            Adarsh Sulegai / {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <p className={styles.readingTime}>{post.readingTime.text}</p>
        </div>

        <div className={styles.blog}>
          <MDXContent
            components={{ MyButton, Image }}
            imageStyles={styles.image}
          />
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
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) {
    return;
  }

  const { title, date, description, readingTime } = post;

  return {
    title,
    date,
    readingTime,
    description,
  };
}
