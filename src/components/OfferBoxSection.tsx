import Image from 'next/image'

const items = [
  '4 Lições completas em PDF (Lições 1 a 4)',
  'Guia do Pai em cada lição — você entra preparado, sempre',
  'Roteiro de Conversa pronto — sem improvisar, sem gaguejar',
  'Exercício Prático + Quiz Semanal em cada lição',
  'Card "Pergunta da Semana" para enviar no WhatsApp',
  'Acesso imediato, em qualquer dispositivo, para sempre',
]

export default function OfferBoxSection() {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="offer-heading">
      <div className="max-w-3xl mx-auto">
        <div className="border-2 border-navy rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-navy px-8 py-6 text-center">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
              🛡️ O que você leva hoje
            </span>
            <h2
              id="offer-heading"
              className="font-serif text-2xl font-bold text-on-navy mt-2 leading-snug"
            >
              Série Escudo de Fé — Escudo de Bronze
            </h2>
            <p className="font-sans text-sm text-on-navy/60 mt-1">
              4 semanas de apologética prática para crianças de 8 a 12 anos
            </p>
          </div>
          {/* Body */}
          <div className="bg-cream px-8 py-7 grid md:grid-cols-2 gap-8 items-center">
            {/* Mockup */}
            <div className="flex items-center justify-center">
              <Image
                src="/mockup.png"
                alt="Série Escudo de Fé — Escudo de Bronze"
                width={340}
                height={340}
                className="w-full max-w-[260px] drop-shadow-xl"
              />
            </div>
            {/* List + CTA */}
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-check font-bold flex-shrink-0 leading-none mt-0.5">✓</span>
                    <span className="font-sans text-sm text-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#planos"
                className="btn-pulse block text-center bg-navy text-on-navy font-sans font-extrabold text-sm uppercase tracking-wide px-7 py-4 rounded-full shadow-lg hover:bg-navy-dark transition-colors duration-200"
              >
                GARANTIR MEU ACESSO COM DESCONTO →
              </a>
              <p className="font-sans text-xs text-muted text-center">
                🔒 Compra segura · Garantia de 14 dias sem risco
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
