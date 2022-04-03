import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import fetcher from '@lib/fetcher';
import * as React from 'react';
import Badge from './Badge';

interface Props {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  _highlightResult?: { title: any; summary: any; slug: any };
}

const BlogPost: React.FC<Props> = ({
  title,
  summary,
  slug,
  tags,
  _highlightResult
}) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4
              className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100"
              dangerouslySetInnerHTML={{
                __html: _highlightResult?.title?.value || title
              }}
            ></h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {!!views && `${format(views)} views`}
            </p>
          </div>
          <p
            className="text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: _highlightResult?.summary?.value || summary
            }}
          ></p>
          <div className="flex flex-row items-center gap-2 pt-2">
            {tags?.map((tag, index) => (
              <Badge text={tag} key={tag} index={index} />
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
