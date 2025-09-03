import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PerformanceOptimizer from '@/components/seo/PerformanceOptimizer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'bildungvisa.de',
    template: '%s | bildungvisa.de'
  },
  description: 'Expert German visa consultation for Bangladeshi students. Ausbildung programs in Pflege (Healthcare), IT, Electrical Engineering, Mechanical Engineering. 98% success rate, 250+ success stories.',
  keywords: [
    'German visa Bangladesh', 'Ausbildung Germany', 'German study visa', 'EU Blue Card', 'Work permit Germany',
    'Pflege Ausbildung', 'Healthcare training Germany', 'IT Ausbildung', 'Electrical engineering Germany',
    'Mechanical engineering Ausbildung', 'German vocational training', 'Bangladesh to Germany',
    'German immigration consultant', 'Study in Germany', 'German work visa', 'EU visa services',
    'German language course', 'Visa consultation Dhaka', 'Germany student visa', 'Ausbildung programs'
  ],
  authors: [{ name: 'BildungVisa Team' }],
  creator: 'BildungVisa',
  publisher: 'BildungVisa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bildungvisa.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'bildungvisa.de',
    description: 'Expert German visa consultation for Bangladeshi students. Ausbildung programs in Pflege (Healthcare), IT, Electrical Engineering, Mechanical Engineering. 98% success rate, 250+ success stories.',
    url: 'https://bildungvisa.de',
    siteName: 'BildungVisa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BildungVisa - German Visa Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bildungvisa.de',
    description: 'Expert German visa consultation for Bangladeshi students. 98% success rate, 250+ success stories.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BildungVisa",
    "description": "Expert German visa consultation for Bangladeshi students. Ausbildung programs in Pflege (Healthcare), IT, Electrical Engineering, Mechanical Engineering.",
    "url": "https://bildungvisa.de",
    "logo": "https://bildungvisa.de/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49 1556 0354545",
      "contactType": "Customer Service",
      "areaServed": "BD",
      "availableLanguage": ["Bengali", "English", "German"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressLocality": "Frankfurt"
    },
    "sameAs": [
      "https://facebook.com/bildungvisa",
      "https://linkedin.com/company/bildungvisa"
    ],
    "serviceType": "Immigration Consultation",
    "areaServed": "Germany"
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        <PerformanceOptimizer 
          preloadImages={[
            '/images/heroes/homepage-hero.svg',
            '/images/services/consultation.svg'
          ]}
          preconnectDomains={['https://fonts.googleapis.com']}
          prefetchRoutes={['/ausbildung', '/study-visa', '/work-permit', '/consultation', '/about', '/contact']}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-section { min-height: 100vh; }
            .btn-primary { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); }
            .loading-skeleton { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: .5; }
            }
          `
        }} />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}