import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const calSans = localFont({
  src: "./fonts/CalSans.woff2",
  variable: "--font-cal-sans",
  display: "swap",
});

const gotham = localFont({
  src: [
    {
      path: "./fonts/Gotham-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Medium.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amine M. Rachid | Portfolio",
  description:
    "Portfolio of Amine M. Rachid, ESI computer science student and junior full-stack web developer based in Algiers.",
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = stored || (prefersDark ? "dark" : "light");
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html
      lang="en"
      className={`${calSans.variable} ${gotham.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
    <Analytics/>
    </>
  );
}
