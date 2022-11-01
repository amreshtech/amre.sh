import { useRouter } from 'next/router';
import React from 'react';
import NextLink from 'next/link';
import Footer from 'app/Footer';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';

export default function Container(props) {
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

  const shouldNotIndex = router.asPath === '/maintenance' ? true : false;
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title={meta.title}
        noindex={shouldNotIndex}
        nofollow={shouldNotIndex}
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
        canonical={`https://www.amre.sh${router.asPath}`}
        openGraph={{
          url: `https://www.amre.sh${router.asPath}`,
          type: meta.type,
          site_name: 'Amresh Mishra',
          description: meta.description,
          title: meta.title,
          images: [
            {
              url: `${meta.image}`,
              alt: `${meta.title}`
            }
          ]
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
        url="https://www.amre.sh"
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
            <NextLink
              href="/"
              className="flex flex-row font-qc text-4xl text-black dark:text-white font-bold gap-2"
            >
              <span>amresh</span>
              <span className="hidden sm:block">mishra</span>
            </NextLink>
          )}
        </div>
        <div className="flex flex-row items-center">
          {!hideNav &&
            navLinks.map(({ label, link }) => (
              <NextLink
                href={link}
                key={link}
                className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
              >
                {label}
              </NextLink>
            ))}
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
