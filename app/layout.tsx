import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://aurra.io'),
  title: 'aurra — BCI Smart Pendant',
  description:
    "A jewellery-form BCI pendant that reads your emotional state and shifts your home's light — without a single tap. Join the waitlist for €299.",
  keywords: ['BCI wearable', 'smart pendant', 'emotional intelligence', 'HRV', 'EDA', 'TinyML', 'smart home', 'biometric'],
  authors: [{ name: 'aurra' }],
  creator: 'aurra',
  publisher: 'aurra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aurra.io',
    siteName: 'aurra',
    title: 'aurra — BCI Smart Pendant',
    description: "A jewellery-form BCI pendant that reads your emotional state and shifts your home's light — without a single tap.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'aurra BCI Smart Pendant' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aurra — BCI Smart Pendant',
    description: "A jewellery-form BCI pendant that reads your emotional state and shifts your home's light — without a single tap.",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-aurra-dark">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
