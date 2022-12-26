import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';
import { usePathname } from 'next/navigation';

export const SeoHeader = ({ meta }) => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title={meta.title}
        noindex={false}
        nofollow={false}
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
        canonical={`https://www.amre.sh${pathname}`}
        openGraph={{
          url: `https://www.amre.sh${pathname}`,
          type: meta.type,
          siteName: 'Amresh Mishra',
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
    </>
  );
};
