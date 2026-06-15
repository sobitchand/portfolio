/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  allowedDevOrigins: ['192.168.56.1'],

  // Only allow images from the local public/ directory
  images: {
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent the page from being embedded in iframes (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },

          // Stop browsers from guessing the content type
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // Force HTTPS for 1 year (subdomains included)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },

          // Only send referrer on same-origin requests
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // Restrict browser features this page can use
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },

          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // unsafe-eval is required by React in dev mode only (stack-trace reconstruction)
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
              // Tailwind inline styles + framer-motion
              "style-src 'self' 'unsafe-inline' https://db.onlinewebfonts.com",
              "font-src 'self' https://db.onlinewebfonts.com",
              // Local images only
              "img-src 'self' data:",
              // No external connections
              "connect-src 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
