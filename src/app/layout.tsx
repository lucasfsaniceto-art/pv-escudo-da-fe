import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import Script from 'next/script'
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
      <body>
        {children}
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','918112226574836');
          fbq('track','PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=918112226574836&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  )
}
