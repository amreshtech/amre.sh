import { parseISO, format } from 'date-fns';
import Container from '@components/Container';
import ViewCounter from '@components/ViewCounter';
import type { FrontMatter } from 'types';
import Badge from '@components/Badge';

interface Props {
  children: React.ReactNode;
  frontMatter: FrontMatter;
}

const BlogLayout: React.FC<Props> = ({ children, frontMatter }) => {
  return (
    <Container
      title={`${frontMatter.title} – Amresh`}
      description={frontMatter.summary}
      image={`https://amre.sh${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
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
          <p className="inline-flex gap-1 text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            <div>{frontMatter.readingTime.text}</div>
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full pt-8">
          {children}
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;
