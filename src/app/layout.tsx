import { Metadata } from "next";
import './globals.css';

import { ThemeSwitcherProvider } from "@/app/contexts/ThemeSwitcherProvider";
import Header from "@/components/Header";
import type { Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'My portfolio',
  description: 'This is my portfolio',
  authors: [{ name: 'Kaiky Tupinambá', url: 'https://github.com/kaikyMoura' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#161616',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>
        <ThemeSwitcherProvider>
          <div className="min-h-screen">
            <Header />
            <main>
              {children}
            </main>
          </div>
        </ThemeSwitcherProvider>
      </body>
    </html>
  );
}