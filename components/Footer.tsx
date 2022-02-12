import NowPlaying from '@components/NowPlaying';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center max-w-3xl mx-auto w-full mb-8">
      {router.pathname !== '/' && (
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      )}
      <div className="text-sm text-black dark:text-white">
        &copy; {currentYear} Amresh Mishra
      </div>
    </footer>
  );
};

export default Footer;
