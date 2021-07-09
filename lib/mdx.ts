import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { postFetcher } from './post-fetcher';

import MDXComponents from '@components/MDXComponents';
import { createSearchRecords } from 'scripts/createSearchRecords';

export async function getFiles(type) {
  try {
    return await postFetcher.fetchAllPostPaths(type);
  } catch (error) {
    console.error(error);
  }
}

export async function getFileBySlug(type?: string, slug?: string) {
  try {
    const source = slug
      ? await postFetcher.fetchPost(`${type}/${slug}.mdx`)
      : await postFetcher.fetchPost(`${type}.mdx`);

    const { data, content } = matter(source);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [
          require('remark-autolink-headings'),
          require('remark-slug'),
          require('remark-code-titles')
        ],
        rehypePlugins: [mdxPrism]
      }
    });

    const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
    const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);

    return {
      mdxSource,
      tweetIDs: tweetIDs || [],
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        slug: slug || null,
        ...data
      }
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getAllFilesFrontMatter(type) {
  try {
    const files = await postFetcher.fetchAllPostPaths(type);
    const allFilesFrontMatter = files.reduce(async (allPosts, postSlug) => {
      const source = await postFetcher.fetchPost(`${type}/${postSlug}`);
      const { data } = matter(source);

      return [
        {
          ...data,
          slug: postSlug.replace('.mdx', '')
        },
        ...(await allPosts)
      ];
    }, []);
    if (process.env.NODE_ENV === 'production') {
      createSearchRecords(await allFilesFrontMatter);
    }
    return allFilesFrontMatter;
  } catch (error) {
    console.error(error);
  }
}
