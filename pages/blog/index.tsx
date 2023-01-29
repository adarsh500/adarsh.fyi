import styles from './Blog.module.scss';
import * as path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import BlogCard from '@components/BlogCard';

const index = (props: { posts: any }) => {
  const { posts } = props;
  console.log(posts);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Blogs</p>
        {posts.map((post: any) => (
          <BlogCard {...post.frontMatter} slug={post.slug} />
        ))}
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
      slug: fileName.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
