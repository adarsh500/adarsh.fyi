import styles from './Blog.module.scss';
import * as path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import BlogCard from '@components/BlogCard';
import readingTime from 'reading-time';

// const index = (props: { posts: any }) => {
//   const { posts } = props;

//   return (
//     <main className={styles.main}>
//       <div className={styles.container}>
//         <p className={styles.title}>Blogs</p>
//         <div className={styles.blogs}>
//           {posts.map((post: any) => (
//             <>
//               <BlogCard
//                 {...post.frontMatter}
//                 slug={post.url}
//                 readingTime={post.readingTime}
//               />
//               <BlogCard
//                 {...post.frontMatter}
//                 slug={post.url}
//                 readingTime={post.readingTime}
//               />
//               <BlogCard
//                 {...post.frontMatter}
//                 slug={post.url}
//                 readingTime={post.readingTime}
//               />
//               <BlogCard
//                 {...post.frontMatter}
//                 slug={post.url}
//                 readingTime={post.readingTime}
//               />
//             </>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default index;

// export const getStaticProps = async () => {
//   const postsDirectory = fs.readdirSync(path.join('posts'));

//   const posts = postsDirectory.map((fileName) => {
//     const fullPath = fs.readFileSync(path.join('posts', fileName), 'utf-8');
//     const { data: frontMatter } = matter(fullPath);

//     return {
//       frontMatter,
//       slug: '/blog/' + fileName.split('.')[0],
//       readingTime: readingTime(fullPath).text,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// };

import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Blog({ posts }: any) {
  console.log('blog posts', posts);

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
