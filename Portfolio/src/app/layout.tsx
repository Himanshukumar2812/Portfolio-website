import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Himanshu Kumar - AI/ML Engineer & Full Stack Developer',
  description: 'Passionate AI/ML Engineer and Full Stack Developer with expertise in creating innovative machine learning solutions and modern web applications.',
  keywords: 'ai engineer, machine learning, deep learning, python, tensorflow, pytorch, react, nextjs, full stack developer, portfolio',
  authors: [{ name: 'Himanshu Kumar' }],
  creator: 'Himanshu Kumar',
  publisher: 'Himanshu Kumar',
  metadataBase: new URL('https://himanshukumar.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://himanshukumar.dev',
    title: 'Himanshu Kumar - AI/ML Engineer & Full Stack Developer',
    description: 'Passionate AI/ML Engineer and Full Stack Developer with expertise in creating innovative machine learning solutions and modern web applications.',
    siteName: 'Himanshu Kumar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himanshu Kumar - AI/ML Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Kumar - AI/ML Engineer & Full Stack Developer',
    description: 'Passionate AI/ML Engineer and Full Stack Developer with expertise in creating innovative machine learning solutions and modern web applications.',
    images: ['/og-image.jpg'],
    creator: '@himanshukumar',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}