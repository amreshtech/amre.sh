import '@styles/global.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <Component {...pageProps} />
        <Analytics />
      </SimpleReactLightbox>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_ANALYTICS}
        src="https://stats.amre.sh/umami.js"
      />
    </ThemeProvider>
  );
}
