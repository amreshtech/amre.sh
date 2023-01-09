import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';

type SeoHeadProps = {
  [x: string]: string | boolean;
};

export const SeoHead: React.FC<SeoHeadProps> = (props) => {
  const meta: SeoHeadProps = {
    title: 'Amresh – Developer, photographer, travel freak, investor',
    description:
      'I regularly pen down my thoughts on front end development, programming, tech, and finance and how each of them enrich the world around us.',
    type: 'website',
    noindex: false,
    nofollow: false,
    ...props
  };
  return (
    <>
      <NextSeo
        title={meta.title as string}
        noindex={meta.noindex as boolean}
        nofollow={meta.nofollow as boolean}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: true,
          noarchive: false,
          maxSnippet: 100,
          maxImagePreview: 'none',
          maxVideoPreview: -1
        }}
        description={meta.description as string}
        canonical={`https://www.amre.sh${meta.route}`}
        openGraph={{
          url: `https://www.amre.sh${meta.route}`,
          type: meta.type as string,
          description: meta.description as string,
          title: meta.title as string,
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
