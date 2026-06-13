import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itsbek.me"),
  title: {
    default: "itsbek.me — Software Engineer",
    template: "%s — itsbek.me",
  },
  description: "Software engineer focused on user experience. React, Astro, TypeScript, and C-level problem solving.",
  icons: {
    icon: [{url: "/favicon.ico"}, {url: "/icon.png", type: "image/png"}],
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsbekme",
  },
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F5F2" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#080808" />
        <link
          rel="preload"
          href="/fonts/clash-display/ClashDisplay-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
