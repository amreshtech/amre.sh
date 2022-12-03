import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import * as React from 'react';
import Badge from './Badge';
import ViewCounter from './ViewCounter';

interface Props {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  image?: string;
}

const BlogPost: React.FC<Props> = ({ title, summary, slug, tags }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={slug} className="w-full">
      <div className="mb-8 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
            {!!views && <ViewCounter slug={slug} />}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        <div className="flex flex-row items-center gap-2 pt-2">
          {tags?.map((tag, index) => (
            <Badge text={tag} key={tag} index={index} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
