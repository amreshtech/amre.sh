import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const BLOG_HOMEPAGE_GRAPHQL_FIELDS = `
publishedDate
slug
title
summary
tags
`;

const BLOGPOST_GRAPHQL_FIELDS = `
publishedDate
slug
title
summary
tags
tldr
content
`;

const preview = process.env.NODE_ENV === 'development';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${
    preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN
  }`
};
async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${
      process.env.CONTENTFUL_SPACE_ID
    }/environments/${preview ? 'dev' : 'master'}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json());
}

const extractPost = async (fetchResponse: {
  data: { blogPostCollection: { items: { slug: string; content: string }[] } };
}) => {
  const blogPost = fetchResponse?.data?.blogPostCollection?.items?.[0];
  return {
    ...blogPost,
    readingTime: readingTime(blogPost.content),
    shortUrl: await getShortUrl(blogPost.slug),
    content: await serialize(blogPost.content, {
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
    })
  };
};

const extractPostEntries = (fetchResponse: {
  data: { blogPostCollection: { items: any } };
}) => fetchResponse?.data?.blogPostCollection?.items;

export const getPostBySlug = async (slug: any) => {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          ${BLOGPOST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPost(entry);
};

export const getAllPostsWithSlug = async () => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: publishedDate_DESC, preview: ${preview}) {
        items {
          ${BLOG_HOMEPAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
};

export const getAllPostsForHome = async () => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: publishedDate_DESC, preview: ${preview}) {
        items {
          ${BLOG_HOMEPAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
};

const getShortUrl = async (slug: string) => {
  const options = {
    method: 'POST',
    headers: {
      authorization: process.env.SHORT_IO_API,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      originalURL: `https://www.amre.sh/blog/${slug}`,
      domain: 'blog.amre.sh'
    })
  };
  const response = await fetch('https://api.short.io/links', options);
  const data = await response.json();
  return data.shortURL;
};
