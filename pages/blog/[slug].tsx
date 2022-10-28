import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@layouts/BlogLayout';
import MDXComponents from '@components/MDXComponents';
import type { MDXSource, ReadingTime } from 'types';
import { getAllPostsWithSlug, getPostBySlug } from '@lib/contentful';

interface Props {
  createdAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  content: MDXSource;
  shortUrl: string;
  readingTime: ReadingTime;
}

const Blog: React.FC<Props> = ({
  createdAt,
  updatedAt,
  slug,
  title,
  summary,
  tags,
  content,
  shortUrl,
  readingTime
}) => {
  return (
    <BlogLayout
      createdAt={createdAt}
      updatedAt={updatedAt}
      slug={slug}
      title={title}
      summary={summary}
      tags={tags}
      shortUrl={shortUrl}
      readingTime={readingTime}
    >
      <MDXRemote {...content} components={{ ...MDXComponents }} />
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { ...post } };
}

export default Blog;
