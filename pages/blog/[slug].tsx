import BlogLayout from '@layouts/BlogLayout';
import MDXComponents from '@components/MDXComponents';
import type { ReadingTime } from 'types';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult
} from 'next';

interface Props {
  title: string;
  slug: string;
  summary: string;
  readingTime: ReadingTime;
  shortUrl: string;
  body: { code: string };
  tags: string[];
  publishedAt: string;
}

const Blog: React.FC<Props> = ({
  title,
  slug,
  summary,
  readingTime,
  shortUrl,
  body: { code },
  tags,
  publishedAt
}) => {
  const MDXContent = useMDXComponent(code);
  return (
    <BlogLayout
      createdAt={publishedAt}
      updatedAt={publishedAt}
      slug={slug}
      title={title}
      summary={summary}
      tags={tags}
      shortUrl={shortUrl}
      readingTime={readingTime}
    >
      <MDXContent components={MDXComponents} />
    </BlogLayout>
  );
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allPosts.map((post) => post.slug);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({
  params
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );

  const {
    title,
    slug,
    summary,
    readingTime,
    shortUrl,
    body: { code },
    tags,
    publishedAt
  } = post;

  return {
    props: {
      title,
      slug,
      summary,
      readingTime,
      shortUrl,
      body: { code },
      tags,
      publishedAt
    }
  };
}

export default Blog;
