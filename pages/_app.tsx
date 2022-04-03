import '@styles/global.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import SimpleReactLightbox from 'simple-react-lightbox';
import flagsmith from 'flagsmith/isomorphic';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';

export default function App({ Component, pageProps, maintenance_mode }) {
  const Maintenance = dynamic(() => import('../components/Maintenance'));
  return maintenance_mode ? (
    <Maintenance />
  ) : (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ res }: NextPageContext) => {
  const environmentID = process.env.FLAGSMITH_ENV_ID;
  await flagsmith.init({
    environmentID
  });
  const data = flagsmith.getAllFlags();
  const maintenance_mode = data?.maintenance_mode.enabled;
  return {
    maintenance_mode
  };
};
