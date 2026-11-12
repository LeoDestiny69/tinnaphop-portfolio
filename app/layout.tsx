import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tinnaphop Saelim — Full Stack Developer',
  description: 'Portfolio of Tinnaphop Saelim, a Full Stack Developer building reliable business applications with React, Next.js, TypeScript, and PostgreSQL.',
  openGraph: {
    title: 'Tinnaphop Saelim — Full Stack Developer',
    description: 'Portfolio of Tinnaphop Saelim, a Full Stack Developer building reliable business applications with React, Next.js, TypeScript, and PostgreSQL.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tinnaphop Saelim Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Tinnaphop Saelim — Full Stack Developer',
    description: 'Portfolio of Tinnaphop Saelim, a Full Stack Developer building reliable business applications.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
