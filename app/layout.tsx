import type { Metadata } from 'next';
import './globals.css';
import { poppins } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Unified Makers',
    default: 'Unified Makers',
  },
  description: 'Unified Makers is a trusted platform connecting users with skilled professionals across various industries. Designed to simplify the search for reliable services, it empowers users to find and filter experts by category, location, and more, serving as a one-stop solution for all professional needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} antialiased flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
