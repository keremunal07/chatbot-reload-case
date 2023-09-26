import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/providers';

const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/sf-pro-display/sf-pro-display-heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display/sf-pro-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display/sf-pro-display-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display/sf-pro-display-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display/sf-pro-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'AI Chatbot',
  description: 'reload.case',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${sfPro.className} no-scrollbar`}>{props.children}</body>
      </Providers>
    </html>
  );
}
