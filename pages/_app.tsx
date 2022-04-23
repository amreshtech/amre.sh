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
        defer={true}
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS}"}`}
      />
    </ThemeProvider>
  );
}
