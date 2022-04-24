import '@styles/global.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import SimpleReactLightbox from 'simple-react-lightbox';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_ANALYTICS}
        src={process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT}
      />
    </ThemeProvider>
  );
}
