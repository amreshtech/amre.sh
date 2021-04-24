import Link from 'next/link';
import { parseISO, format } from 'date-fns';

interface Props {
  slug: string;
  publishedAt: string;
}

const NewsletterLink: React.FC<Props> = ({ slug, publishedAt }) => {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</a>
      </Link>
    </li>
  );
};

export default NewsletterLink;
