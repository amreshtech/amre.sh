import Link from 'next/link';

import ProsCard from '@components/ProsCard';
import ConsCard from '@components/ConsCard';
import Analytics from '@components/metrics/Analytics';
import Step from '@components/Step';
import Document from '@components/Document';
import TldrCard from './TldrCard';
import dynamic from 'next/dynamic';
import Slides from './Slides';
import SingleImage from './SingleImage';

const ConsultationCard = dynamic(() => import('./ConsultationCard'), {
  ssr: false
});

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
  SingleImage,
  a: CustomLink,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  Document,
  TldrCard,
  ConsultationCard,
  Slides
};

export default MDXComponents;
