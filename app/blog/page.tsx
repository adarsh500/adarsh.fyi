import styles from './blog.module.scss';
import { allPosts } from 'contentlayer/generated';
import BlogCard from '@components/BlogCard';

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Blogs</p>
        <div className={styles.blogs}>
          {allPosts.map((post: any, index: number) => (
            <>
              <BlogCard
                key={index}
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
