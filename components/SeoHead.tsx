import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';

type SeoHeadProps = {
  title?: string;
  image?: string;
  route?: string;
  description?: string;
  type?: string;
};

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  image,
  route,
  description,
  type
}) => {
  const meta = {
    title: title || 'Amresh – Developer, photographer, travel freak, investor',
    description:
      description ||
      'My thoughts on front end development, programming, tech, and my personal life.',
    type: type || 'website'
  };
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
        canonical={`https://www.amre.sh${route}`}
        openGraph={{
          url: `https://www.amre.sh${route}`,
          type: meta.type,
          description: meta.description,
          title: meta.title,
          images: [
            {
              url: `${image}`,
              alt: `${meta.title}`
            }
          ]
        }}
        twitter={{
          cardType: `${image}`,
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
