import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Aansh Collection | Premium Ethnic Wear, Sarees & Jewellery',
  description:
    'Shop premium ethnic wear, jewellery and sarees at Aansh Collection. Best quality at lowest prices. COD available. Pan India shipping. Order on WhatsApp.',
  keywords:
    'aansh collection, ethnic wear, kurti sets, sarees, co-ord sets, Indian fashion, jewellery, festive wear, daily wear, COD, pan india shipping',
  authors: [{ name: 'Aansh Collection' }],
  creator: 'Aansh Collection',
  publisher: 'Aansh Collection',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aanshcollection.in',
    siteName: 'Aansh Collection',
    title: 'Aansh Collection | Premium Ethnic Wear & Jewellery',
    description:
      'Curated ethnic wear for every celebration. Premium jewellery, fashion & sarees at best prices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aansh Collection | Premium Ethnic Wear & Jewellery',
    description: 'Premium jewellery, fashion & sarees ✨ Elevate your style today.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ClothingStore',
              name: 'Aansh Collection',
              description:
                'Premium ethnic wear, jewellery and sarees at best prices.',
              url: 'https://aanshcollection.in',
              sameAs: ['https://www.instagram.com/aansh_collection'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
              },
            }),
          }}
        />
      </head>
      <body className="font-poppins bg-ivory text-dark antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
