import type { Metadata } from 'next';
import { Space_Mono, Inter } from 'next/font/google';
import '../globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Er. Purushottam Chand Bohora | Founder & Tech Architect',
  description:
    'Securing the Web. Building the Future of SaaS. Cybersecurity Engineer, Full-Stack Developer, and Startup Founder specializing in high-performance digital ecosystems.',
  keywords: [
    'Founder',
    'CTO',
    'Tech Architect',
    'Cybersecurity',
    'Full-Stack Developer',
    'SaaS',
    'Next.js',
    'React',
    'Tech Lead',
  ],
  authors: [{ name: 'Er. Purushottam Chand Bohora' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Er. Purushottam Chand Bohora',
    title: 'Er. Purushottam Chand Bohora | Founder & Tech Architect',
    description:
      'Securing the Web. Building the Future of SaaS. Cybersecurity Engineer and Startup Founder.',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/portrait.jpg" />
      </head>
      <body className="bg-transparent text-white antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="absolute -top-40 left-0 bg-neon-cyan text-obsidian px-4 py-2 focus:top-0 transition-all"
        >
          Skip to main content
        </a>

        <main id="main-content" className="w-full overflow-x-hidden">
          {children}
        </main>

        {/* Analytics (optional) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script> */}
      </body>
    </html>
  );
}
