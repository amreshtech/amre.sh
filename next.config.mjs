import { withContentlayer } from 'next-contentlayer';
import withBundleAnalyzer from '@next/bundle-analyzer';

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.vercel-insights.com *.calendly.com data: https://stats.amre.sh/umami.js;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com *.calendly.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' *.gstatic.com;
  object-src 'self' res.cloudinary.com;
  frame-src 'self' res.cloudinary.com https://calendly.com/;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

const nextConfig = {
  swcMinify: false,
  publicRuntimeConfig: {
    ALGOLIA_ADMIN_KEY: process.env.ALGOLIA_ADMIN_KEY,
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID
  },
  env: {
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN
  },
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture
      'res.cloudinary.com', // Cloudinary image storage
      'maps.googleapis.com' // Google Static Map
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

export default withContentlayer(bundleAnalyzer(nextConfig));
