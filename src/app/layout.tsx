import '../styles/globals.css'
import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import SkipToContent from '@/components/layout/SkipToContent'
import { siteSettings } from '@/data/site'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    default: siteSettings.title,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
  applicationName: siteSettings.name,
  authors: [{ name: siteSettings.author.name, url: siteSettings.url }],
  creator: siteSettings.author.name,
  publisher: siteSettings.author.name,
  alternates: {
    canonical: siteSettings.url,
    types: {
      'application/rss+xml': '/rss.xml',
      'application/atom+xml': '/atom.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: siteSettings.locale,
    url: siteSettings.url,
    siteName: siteSettings.name,
    title: siteSettings.title,
    description: siteSettings.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteSettings.title,
    description: siteSettings.description,
    creator: siteSettings.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`
          ${plexSans.variable}
          ${fraunces.variable}
          ${plexMono.variable}
          font-sans min-h-screen
        `}
      >
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
