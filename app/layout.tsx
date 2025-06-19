import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henricolindo',
  description: 'Portfolio de henrique',
  icons: 'rino.png'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
