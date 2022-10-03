import { parseISO, format } from 'date-fns';
import Container from '@components/Container';
import ViewCounter from '@components/ViewCounter';
import type { FrontMatter } from 'types';
import Badge from '@components/Badge';
import React, { ClipboardEventHandler, MouseEventHandler } from 'react';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import { FaShareSquare } from 'react-icons/fa';
import SuccessMessage from '@components/SuccessMessage';

interface Props {
  children: React.ReactNode;
  frontMatter: FrontMatter;
}

const BlogLayout: React.FC<Props> = ({ children, frontMatter }) => {
  const preventPlagiarism: ClipboardEventHandler<HTMLDivElement> = (e) => {
    e.clipboardData.setData(
      'text/plain',
      `${document
        .getSelection()
        .toString()
        .substring(0, 50)}...Visit https://www.amre.sh/blog/${frontMatter.slug}`
    );
    e.preventDefault();
  };
  const router = useRouter();
  const [isShared, setIsShared] = React.useState(false);
  const handleShareButtonClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    navigator.clipboard.writeText(frontMatter.shortUrl).then(() => {
      setIsShared(true);
    });
  };

  setTimeout(() => {
    if (isShared) {
      setIsShared(false);
    }
  }, 2000);

  return (
    <Container
      title={`${frontMatter.title} – Blog by Amresh`}
      description={frontMatter.summary}
      image={`${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <ArticleJsonLd
        type="Blog"
        url={`https://www.amre.sh${router.asPath}`}
        title={frontMatter.title}
        datePublished={new Date(frontMatter.publishedAt).toISOString()}
        dateModified={new Date(frontMatter.publishedAt).toISOString()}
        authorName="Amresh Mishra"
        description={frontMatter.summary}
        images={[`${frontMatter.image}`]}
      />
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full bg-white dark:bg-black z-10">
        <div className="flex flex-row items-center gap-2 pb-3">
          {frontMatter.tags?.map((tag, index) => (
            <Badge text={tag} key={tag} index={index} />
          ))}
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>
          <div className="inline-flex gap-1 text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            <div>{frontMatter.readingTime.text}</div>
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
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
