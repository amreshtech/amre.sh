import React from 'react';
import NextLink from 'next/link';
import Footer from 'app/Footer';
import '@styles/global.css';
import AppName from './AppName';

import { Inter } from '@next/font/google';

const inter = Inter();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { label: 'Blog', link: '/blog' },
    { label: 'Travel', link: '/travel' },
    { label: 'About', link: '/about' }
  ];

  return (
    <html className={`bg-white dark:bg-black ${inter.className}`} lang="en">
      <body>
        <nav
          className={`sticky-nav flex justify-between items-center max-w-4xl p-4 sm:px-16 sm:py-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 saturate-200 backdrop-blur-lg`}
        >
          <AppName />
          <div className="flex flex-row items-center">
            {navLinks.map(({ label, link }) => (
              <NextLink
                href={link}
                key={link}
                className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
              >
                {label}
              </NextLink>
            ))}
          </div>
        </nav>
        <main
          id="skip"
          className="flex flex-col justify-center bg-white dark:bg-black px-4"
        >
          {children}
        </main>
        <Footer />
        <span id="calendly" />
      </body>
    </html>
  );
}
