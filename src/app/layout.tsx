import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://escudodafe.com.br'),
  title: 'Método Escudo de Fé – Escudo de Bronze | Blindando a Fé dos Seus Filhos',
  description:
    'O Método Escudo de Fé ensina crianças de 8 a 12 anos a pensar a fé — não apenas repeti-la. 4 semanas de apologética prática para famílias cristãs.',
  keywords: 'apologética cristã, método escudo de fé, ensino cristão, família cristã, crianças, fé',
  openGraph: {
    title: 'Método Escudo de Fé – Escudo de Bronze',
    description:
      'Blindando a fé dos seus filhos antes que o mundo forme as dúvidas. Acesso imediato. Garantia de 90 dias.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Método Escudo de Fé' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Método Escudo de Fé – Escudo de Bronze',
    description: 'Blindando a fé dos seus filhos antes que o mundo forme as dúvidas.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
