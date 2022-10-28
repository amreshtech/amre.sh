import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const CONTENT_DELIVERY_BASE_URL = 'https://cdn.contentful.com';
const preview = process.env.NODE_ENV === 'development';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`
};

async function fetchData({
  preview = false,
  path
}: {
  preview: boolean;
  path: string;
}) {
  return fetch(
    `${CONTENT_DELIVERY_BASE_URL}/spaces/${
      process.env.CONTENTFUL_SPACE_ID
    }/environments/${
      preview ? 'dev' : 'master'
    }/entries/?content_type=blogPost&${path}`,
    {
      headers
    }
  ).then((response) => response.json());
}

const extractPost = async (entry: { items: { fields: any }[] }) => {
  const blogPost = entry?.items?.map(({ fields }) => ({ ...fields }))[0];
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

const select = (fields: string[]) =>
  `select=${fields.map((field: string) => `fields.${field}`).join(',')}`;
const filter = (field: string, filterBy: string) =>
  `fields.${field}=${filterBy}`;

const extractPostEntries = (entries: { items: { fields: any }[] }) =>
  entries?.items.map(({ fields }) => ({ ...fields }));

export const getPostBySlug = async (slug: any) => {
  const requiredFields = ['title', 'publishedDate', 'content', 'tags', 'slug'];
  const entry = await fetchData({
    preview,
    path: `${filter('slug', slug)}&${select(requiredFields)}`
  });
  return extractPost(entry);
};

export const getAllPostsWithSlug = async () => {
  const requiredFields = ['slug'];
  const entries = await fetchData({
    preview,
    path: select(requiredFields)
  });
  return extractPostEntries(entries);
};

export const getAllPostsForHome = async () => {
  const requiredFields = ['title', 'tags', 'slug', 'summary'];
  const entries = await fetchData({
    preview,
    path: select(requiredFields)
  });
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
