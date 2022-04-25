import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Footer from '@components/Footer';
import Particles from 'react-tsparticles';
import particlesJson from '../particles.json';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, hideNav = false, posts, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Amresh – Developer, photographer, travel freak, investor',
    description:
      'My thoughts on front end development, programming, tech, and my personal life.',
    type: 'website',
    ...customMeta
  };
  const navLinks = [
    { label: 'Blog', link: '/blog' },
    { label: 'Travel', link: '/travel' },
    { label: 'About', link: '/about' }
  ];

  const ThemeButton = () => (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
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
    </button>
  );

  return (
    <div className="bg-white dark:bg-black">
      <Particles options={particlesJson as any} />
      <NextSeo
        title={meta.title}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: true,
          noarchive: false,
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
      <SocialProfileJsonLd
        type="Person"
        name="Amresh Mishra"
        url="http://amre.sh"
        sameAs={[
          'https://www.facebook.com/amreshm/',
          'https://www.instagram.com/amresh.m',
          'https://www.linkedin.com/in/amreshm/',
          'https://www.twitter.com/amreshtech'
        ]}
      />
      <nav
        className={`sticky-nav flex justify-between items-center max-w-4xl p-4 sm:px-16 sm:py-8 my-0 md:my-8 mx-auto  ${
          !hideNav
            ? 'bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 saturate-200 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div>
          {router.pathname !== '/' && (
            <NextLink href="/">
              <a className="flex flex-row font-qc text-4xl text-black dark:text-white font-bold gap-2">
                <span>amresh</span>
                <span className="hidden sm:block">mishra</span>
              </a>
            </NextLink>
          )}
        </div>
        <div className="flex flex-row items-center">
          {!hideNav &&
            navLinks.map(({ label, link }) => (
              <NextLink href={link} key={link}>
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  {label}
                </a>
              </NextLink>
            ))}
          <ThemeButton />
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-4"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
