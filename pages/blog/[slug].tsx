import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@lib/mdx';
import { getTweets } from '@lib/twitter';
import BlogLayout from '@layouts/BlogLayout';
import Tweet from '@components/Tweet';
import MDXComponents from '@components/MDXComponents';
import type { FrontMatter, MDXSource } from 'types';

interface Props {
  mdxSource: MDXSource;
  tweets: any;
  frontMatter: FrontMatter;
}

const Blog: React.FC<Props> = ({ mdxSource, tweets, frontMatter }) => {
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((t) => t.id === id);
    return <Tweet {...tweet} />;
  };

  return <BlogLayout frontMatter={frontMatter}><MDXRemote {...mdxSource} components={
    {...MDXComponents,
    StaticTweet
  }} /></BlogLayout>;
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post, tweets } };
}

export default Blog;
