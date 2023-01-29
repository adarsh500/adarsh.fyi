import styles from './Blog.module.scss';
import * as path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import BlogCard from '@components/BlogCard';
import readingTime from 'reading-time';

const index = (props: { posts: any }) => {
  const { posts } = props;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Blogs</p>
        <div className={styles.blogs}>
          {posts.map((post: any) => (
            <>
              <BlogCard
                {...post.frontMatter}
                slug={post.slug}
                readingTime={post.readingTime}
              />
              <BlogCard
                {...post.frontMatter}
                slug={post.slug}
                readingTime={post.readingTime}
              />
              <BlogCard
                {...post.frontMatter}
                slug={post.slug}
                readingTime={post.readingTime}
              />
              <BlogCard
                {...post.frontMatter}
                slug={post.slug}
                readingTime={post.readingTime}
              />
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default index;

export const getStaticProps = async () => {
  const postsDirectory = fs.readdirSync(path.join('posts'));

  const posts = postsDirectory.map((fileName) => {
    const fullPath = fs.readFileSync(path.join('posts', fileName), 'utf-8');
    const { data: frontMatter } = matter(fullPath);

    return {
      frontMatter,
      slug: '/blog/' + fileName.split('.')[0],
      readingTime: readingTime(fullPath).text,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
