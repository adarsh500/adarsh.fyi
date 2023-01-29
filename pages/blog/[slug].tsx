import styles from './Blog.module.scss';
import * as path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

const components = { SyntaxHighlighter };

const index = (props: any) => {
  const { frontMatter, slug, mdxSource } = props;
  const { title, date, description, thumbnail, tags } = frontMatter;
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </main>
  );
};

export default index;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
