import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
};

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
    siteName: 'Er. Purushottam Chand Bohora',
    title: 'Er. Purushottam Chand Bohora | Founder & Tech Architect',
    description:
      'Securing the Web. Building the Future of SaaS. Cybersecurity Engineer and Startup Founder.',
  },
  twitter: {
    card: 'summary_large_image',
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
        <link rel="icon" href="/favicon.ico" />
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
