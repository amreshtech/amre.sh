import { parseISO, format } from 'date-fns';
import Container from '@components/Container';
import ViewCounter from '@components/ViewCounter';
import type { FrontMatter } from 'types';
import Badge from '@components/Badge';
import { ClipboardEventHandler } from 'react';
import { BlogJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

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
        .substring(0, 50)}...Visit https://amre.sh/blog/${frontMatter.slug}`
    );
    e.preventDefault();
  };
  const router = useRouter();
  return (
    <Container
      title={`${frontMatter.title} – Amresh`}
      description={frontMatter.summary}
      image={`https://amre.sh${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <BlogJsonLd
        url={`https://amre.sh${router.asPath}`}
        title={frontMatter.title}
        datePublished={new Date(frontMatter.publishedAt).toISOString()}
        dateModified={new Date(frontMatter.publishedAt).toISOString()}
        authorName="Amresh Mishra"
        description={frontMatter.summary}
        images={[`https://amre.sh${frontMatter.image}`]}
      />
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full bg-white dark:bg-black z-10">
        <div className="flex flex-row items-center gap-2 pb-3">
          {frontMatter.tags?.map((tag) => (
            <Badge text={tag} key={tag} />
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
