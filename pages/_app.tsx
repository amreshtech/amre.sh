import '@styles/global.css';

import { ThemeProvider } from 'next-themes';
import SimpleReactLightbox from 'simple-react-lightbox';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
