import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import '../styles/globals.css'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Univille - Graduação Uni',
  description: 'Universidade com mais de 40 anos de experiência em educação superior',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        {children}
      </body>
    </html>
  )
}