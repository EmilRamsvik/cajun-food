import type { Metadata } from 'next';
import { Playfair_Display, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cajun Oppskriftskort',
  description: 'Cajun-oppskrifter presentert som illustrerte kort',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${playfair.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
