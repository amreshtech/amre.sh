import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Footer from '@components/Footer';
import Particles from 'react-tsparticles';
import particlesJson from '../particles.json';
import { BlogJsonLd, NextSeo } from 'next-seo';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, hideNav, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Amresh – Developer, photographer, travel freak',
    description: `Front-end developer`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
      <Particles options={particlesJson as any} />
      <NextSeo
        title={meta.title}
        noindex={true}
        nofollow={true}
        robotsProps={{
          nosnippet: true,
          notranslate: false,
          noimageindex: true,
          noarchive: true,
          maxSnippet: 100,
          maxImagePreview: 'none',
          maxVideoPreview: -1
        }}
        description={meta.description}
        canonical={`https://amre.sh${router.asPath}`}
        openGraph={{
          url: `https://amre.sh${router.asPath}`,
          type: meta.type,
          site_name: 'Amresh Mishra',
          description: meta.description,
          title: meta.title
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@amreshtech',
          handle: '@amreshtech'
        }}
      />
      <BlogJsonLd
        url={`https://amre.sh${router.asPath}`}
        title={meta.title}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName="Amresh Mishra"
        description={meta.description}
        images={meta.images}
      />
      <nav
        className={`sticky-nav flex justify-between items-center max-w-4xl p-4 sm:px-16 sm:py-8 my-0 md:my-8 mx-auto  ${
          !hideNav
            ? 'bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 saturate-200 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div>
          {!hideNav && (
            <NextLink href="/">
              <a>
                <div className="font-qc text-4xl text-black dark:text-white font-bold hidden sm:block">
                  amresh mishra
                </div>
                <div className="font-qc text-4xl text-black dark:text-white font-bold block sm:hidden">
                  amresh
                </div>
              </a>
            </NextLink>
          )}
        </div>
        <div className="flex flex-row items-center">
          {!hideNav && (
            <>
              <NextLink href="/blog">
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  Blog
                </a>
              </NextLink>
              <NextLink href="/travel">
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  Travel
                </a>
              </NextLink>
              <NextLink href="/about">
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 mr-2">
                  About
                </a>
              </NextLink>
            </>
          )}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-4"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
