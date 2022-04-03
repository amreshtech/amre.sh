import Link from 'next/link';
import Image from 'next/image';

import ProsCard from '@components/ProsCard';
import ConsCard from '@components/ConsCard';
import Analytics from '@components/metrics/Analytics';
import Step from '@components/Step';
import Document from '@components/Document';
import TldrCard from './TldrCard';
import ConsultationCard from './ConsultationCard';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  Document,
  TldrCard,
  ConsultationCard
};

export default MDXComponents;
