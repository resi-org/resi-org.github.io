import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Institute for Responsible Superintelligence | RESI',
  description:
    'An independent nonprofit research institute building the foundations needed to make superintelligence safe by design.',
  icons: {
    icon: '/test/resi-favicon.png',
    shortcut: '/test/resi-favicon.png',
    apple: '/test/resi-favicon.png',
  },
  openGraph: {
    title: 'Institute for Responsible Superintelligence | RESI',
    description:
      'An independent nonprofit research institute building the foundations needed to make superintelligence safe by design.',
  },
  twitter: {
    card: 'summary',
    title: 'Institute for Responsible Superintelligence | RESI',
    description:
      'An independent nonprofit research institute building the foundations needed to make superintelligence safe by design.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
