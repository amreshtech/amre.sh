import { parseISO, format } from 'date-fns';
import Container from '@components/Container';
import ViewCounter from '@components/ViewCounter';
import type { FrontMatter, ReadingTime } from 'types';
import Badge from '@components/Badge';
import React, { ClipboardEventHandler, MouseEventHandler } from 'react';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import { FaShareSquare } from 'react-icons/fa';
import SuccessMessage from '@components/SuccessMessage';

interface Props {
  children: React.ReactNode;
  publishedDate: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  shortUrl: string;
  readingTime: ReadingTime;
}

const BlogLayout: React.FC<Props> = ({
  children,
  publishedDate,
  slug,
  title,
  summary,
  tags,
  shortUrl,
  readingTime
}) => {
  const preventPlagiarism: ClipboardEventHandler<HTMLDivElement> = (e) => {
    e.clipboardData.setData(
      'text/plain',
      `${document
        .getSelection()
        .toString()
        .substring(0, 50)}...Visit https://www.amre.sh/blog/${slug}`
    );
    e.preventDefault();
  };
  const router = useRouter();
  const [isShared, setIsShared] = React.useState(false);
  const handleShareButtonClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      setIsShared(true);
    });
  };

  setTimeout(() => {
    if (isShared) {
      setIsShared(false);
    }
  }, 2000);
  const image = '';
  return (
    <Container
      title={`${title} – Blog by Amresh`}
      description={summary}
      image={`${image}`}
      date={new Date(publishedDate).toISOString()}
      type="article"
    >
      <ArticleJsonLd
        type="Blog"
        url={`https://www.amre.sh${router.asPath}`}
        title={title}
        datePublished={new Date(publishedDate).toISOString()}
        dateModified={new Date(publishedDate).toISOString()}
        authorName="Amresh Mishra"
        description={summary}
        images={[`${image}`]}
      />
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full bg-white dark:bg-black z-10">
        <div className="flex flex-row items-center gap-2 pb-3">
          {tags?.map((tag: string, index: number) => (
            <Badge text={tag} key={tag} index={index} />
          ))}
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {format(parseISO(publishedDate), 'MMMM dd, yyyy')}
          </p>
          <div className="inline-flex gap-1 text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            <div>{readingTime.text}</div>
            {` • `}
            <ViewCounter slug={slug} />
            <button
              aria-label="Share this blog"
              className="ml-1"
              onClick={handleShareButtonClick}
              title="Share this blog"
            >
              {isShared ? (
                <SuccessMessage>Copied</SuccessMessage>
              ) : (
                <FaShareSquare />
              )}
            </button>
          </div>
        </div>
        <div
          className="prose dark:prose-dark max-w-none w-full pt-8"
          onCopy={preventPlagiarism}
        >
          {children}
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;
