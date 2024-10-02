import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import localFont from "next/font/local";
import "./globals.css";
import StyledComponentsRegistry from "../lib/styled-components-registry"

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
  title: "Johnson Kow Portfolio",
  description: "A website dedicated to Johnson Kow's Employment History and Achievements",
  openGraph: {
    title: 'Johnson Kow Portfolio',
    description: `Johnson Kow's Software Engineering Frontend Portfolio`,
    url: 'https://thejohnsonkow.vercel.app/',
    siteName: 'The Johnson Kow',
    images: [
      {
        url: 'https://thejohnsonkow.vercel.app/PortfolioThumbnail.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id='modal-root'></div>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}
