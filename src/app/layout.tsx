import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Md Irfan Uddin | Portfolio',
  description: 'Software Engineering student at DIU focused on building scalable fullstack applications.',
}

import CustomCursor from '@/components/CustomCursor'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-surface text-on-surface font-sans selection:bg-primary-dim/30 selection:text-primary overflow-x-hidden">
        <CustomCursor />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
}
