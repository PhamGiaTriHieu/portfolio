import type {Metadata} from 'next';
import {JetBrains_Mono} from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <ToastContainer />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
