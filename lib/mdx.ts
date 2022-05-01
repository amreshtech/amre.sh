import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { postFetcher } from './post-fetcher';
import { createSearchRecords } from 'scripts/createSearchRecords';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

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
        remarkPlugins: [remarkGfm as any],
        rehypePlugins: [
          rehypeSlug,
          rehypeCodeTitles,
          rehypePrism as any,
          [
            rehypeAutolinkHeadings as any,
            {
              properties: {
                className: ['anchor']
              }
            }
          ]
        ]
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
        shortUrl: await getShortUrl(slug),
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

export async function getShortUrl(slug: string) {
  const options = {
    method: 'POST',
    headers: {
      authorization: process.env.SHORT_IO_API,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      originalURL: `https://www.amre.sh//blog/${slug}`,
      domain: 'blog.amre.sh'
    })
  };
  const response = await fetch('https://api.short.io/links', options);
  const data = await response.json();
  return data.shortURL;
}
