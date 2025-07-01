import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeuroNex - Innovative AI Solutions',
  description: 'Transform your business with cutting-edge AI solutions from NeuroNex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-sans">
          {children}
        </div>
      </body>
    </html>
  )
} 