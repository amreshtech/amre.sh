'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Quicksand } from '@next/font/google';

const quicksand = Quicksand();

export default function AppName() {
  const pathname = usePathname();
  return (
    <div className={quicksand.className}>
      {pathname !== '/' && (
        <NextLink
          href="/"
          className="flex flex-row font-qc text-4xl text-black dark:text-white font-bold gap-2"
        >
          <span>amresh</span>
          <span className="hidden sm:block">mishra</span>
        </NextLink>
      )}
    </div>
  );
}
