import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henrique Cedraz | Desenvolvedor Full Stack',
  description: 'Portfolio de Henrique Cedraz, desenvolvedor full stack especializado em React, Next.js e Node.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
