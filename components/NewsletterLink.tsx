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
        {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
      </Link>
    </li>
  );
};

export default NewsletterLink;
