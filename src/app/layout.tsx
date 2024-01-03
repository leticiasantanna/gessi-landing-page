import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gessi Nunes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Script
        src="https://kit.fontawesome.com/6c97ce8047.js"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

