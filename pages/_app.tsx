import '@styles/global.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
      <SimpleReactLightbox>
        <Component {...pageProps} />
        <Analytics />
      </SimpleReactLightbox>
  );
}
