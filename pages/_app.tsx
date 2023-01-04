import SimpleReactLightbox from 'simple-react-lightbox';
import { Analytics } from '@vercel/analytics/react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/permanent-marker/400.css';
import '../styles/prism-vsc-dark-plus.css';
import '@styles/blog-post-typography.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#000000'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        '@font-face': {
          fontFamily: 'Inter'
        }
      }
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SimpleReactLightbox>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
