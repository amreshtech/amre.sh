import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'next-seo.config';

export default async function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
    </>
  );
}
