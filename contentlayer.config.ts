import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

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

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    summary: {
      type: 'string',
      description: 'The summary of the post',
      required: true
    },
    publishedAt: {
      type: 'date',
      description: 'The date the post was published at',
      required: true
    },
    image: {
      type: 'string',
      description: 'The cover image of the post',
      required: false
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags for the post',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    },
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: 'number',
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    shortUrl: {
      type: 'string',
      resolve: (post) => getShortUrl(`/blog/${post._raw.flattenedPath}`)
    }
  }
}));

export default makeSource(async () => ({
  contentDirPath: 'data',
  documentTypes: [Post],
  mdx: {
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
}));
