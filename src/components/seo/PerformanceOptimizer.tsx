'use client'

import { useEffect } from 'react'
import Head from 'next/head'

interface PerformanceOptimizerProps {
  preloadImages?: string[]
  preconnectDomains?: string[]
  prefetchRoutes?: string[]
}

export default function PerformanceOptimizer({
  preloadImages = [],
  preconnectDomains = ['https://fonts.googleapis.com'],
  prefetchRoutes = ['/ausbildung', '/study-visa', '/work-permit', '/consultation']
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Prefetch important routes
    prefetchRoutes.forEach(route => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = route
      document.head.appendChild(link)
    })

    // Note: Font and CSS preloading removed to prevent 404 errors
    // These assets will be loaded naturally by Next.js

    return () => {
      // Cleanup if needed
    }
  }, [preloadImages, prefetchRoutes])

  return (
    <Head>
      {/* DNS prefetch and preconnect for external domains */}
      {preconnectDomains.map(domain => (
        <link key={domain} rel="preconnect" href={domain} />
      ))}
      
      {/* Resource hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Viewport optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Critical resource hints */}
      <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
      <link rel="preload" href="/_next/static/chunks/webpack.js" as="script" />
      
      {/* Service Worker registration hint */}
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

// Hook for measuring Core Web Vitals
export function useCoreWebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log)
        onFCP(console.log)
        onLCP(console.log)
        onTTFB(console.log)
      }).catch(() => {
        // Fallback if web-vitals is not available
        console.log('Web Vitals not available')
      })
    }
  }, [])
}