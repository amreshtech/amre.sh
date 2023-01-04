import Link from 'next/link';
import Document from '@components/Document';
import TldrCard from './TldrCard';
import dynamic from 'next/dynamic';
import Slides from './Slides';

const ConsultationCard = dynamic(() => import('./ConsultationCard'), {
  ssr: false
});

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link href={href} {...props}></Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  Document,
  TldrCard,
  ConsultationCard,
  Slides
};

export default MDXComponents;
