import { useState } from 'react';

import Container from '@components/Container';
import BlogPost from '@components/BlogPost';
import { getAllFilesFrontMatter } from '@lib/mdx';
import type { Post } from '../types';
import { getSearchResults } from 'scripts/getSearchResults';

interface Props {
  posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(posts);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredBlogPosts((await getSearchResults(e.target.value)) as any);
  };

  return (
    <Container
      title="Blog – Amresh"
      description="Thoughts on the software industry, programming, tech, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 z-10 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={handleSearch}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="mt-8 w-full">
          {!filteredBlogPosts.length && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Searching...
            </p>
          )}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Blog;
