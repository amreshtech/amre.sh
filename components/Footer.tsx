import Link from 'next/link';

import NowPlaying from '@components/NowPlaying';

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<Props> = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
    </footer>
  );
};

export default Footer;
