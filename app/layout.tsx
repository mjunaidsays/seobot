import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MatrixRain from '@/components/MatrixRain'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SEObot — fully autonomous SEO Robot with AI agents',
  description: 'SEObot takes 100% of SEO work out of your way so that you can focus on building your product.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <MatrixRain />
        {children}
      </body>
    </html>
  )
}

