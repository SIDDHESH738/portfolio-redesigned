import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  fallback: ["Courier New", "monospace"],
})

export const metadata: Metadata = {
  title: "Futuristic Portfolio | Digital Architect",
  description: "Immersive 3D portfolio showcasing cutting-edge web development and digital experiences",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Futuristic Portfolio | Digital Architect',
    description: 'Immersive 3D portfolio showcasing cutting-edge web development and digital experiences',
    siteName: 'Futuristic Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futuristic Portfolio | Digital Architect',
    description: 'Immersive 3D portfolio showcasing cutting-edge web development and digital experiences',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${orbitron.className} bg-black text-white antialiased min-h-screen overflow-x-hidden`}>
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
