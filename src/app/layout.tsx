import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cod Simulation',
  description: 'Track your business metrics and calculate ROI in real-time',
  generator: 'bentaidev.netlify.app',
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
