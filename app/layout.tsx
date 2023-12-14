import type { Metadata } from 'next';
import { Dela_Gothic_One, Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bongify | Create Chandler Bing Hugging Vinyl Meme',
  description: 'Bongify - Create Chandler Bing Hugging Vinyl Meme',
  metadataBase: new URL('https://bongify.vercel.app'),
  openGraph: {
    title: 'Bongify | Create Chandler Bing Hugging Vinyl Meme',
    description: 'Bongify - Create Chandler Bing Hugging Vinyl Meme',
    url: 'https://bongify.vercel.app',
    siteName: 'Bongify',
    type: 'website',
  },
  twitter: {
    title: 'Bongify',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.png"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <header className="flex justify-center pt-8">
          <Image
            src="/images/bongify-logo.png"
            width={220}
            height={80}
            alt="bongify logo"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
