import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './main.css';
import Providers from './providers';
import Header from '@/app/ui/components/Header';
import Footer from '@/app/ui/components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JL",
  description: "Welcome to my site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
      </body>
    </html>
  );
}
