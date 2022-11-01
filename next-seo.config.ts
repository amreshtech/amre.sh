import type { NextSeoProps, SocialProfileJsonLdProps } from 'next-seo';

const meta = {
  title: 'Amresh – Developer, photographer, travel freak, investor',
  description:
    'My thoughts on front end development, programming, tech, and my personal life.',
  url: 'https://www.amre.sh/'
};

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Amresh – Developer, photographer, travel freak, investor',
  description:
    'My thoughts on front end development, programming, tech, and my personal life.',
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: true,
    noarchive: false,
    maxSnippet: 100,
    maxImagePreview: 'none',
    maxVideoPreview: -1
  },
  canonical: meta.url,
  openGraph: {
    url: meta.url,
    type: 'website',
    site_name: 'Amresh Mishra',
    description: meta.description,
    title: meta.title
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@amreshtech',
    handle: '@amreshtech'
  }
};

export const SOCIAL_PROFILE_JSON_LD_DEFAULT: SocialProfileJsonLdProps = {
  type: 'Person',
  name: 'Amresh Mishra',
  url: 'https://www.amre.sh',
  sameAs: [
    'https://www.facebook.com/amreshm/',
    'https://www.instagram.com/amresh.m',
    'https://www.linkedin.com/in/amreshm/',
    'https://www.twitter.com/amreshtech'
  ]
};
