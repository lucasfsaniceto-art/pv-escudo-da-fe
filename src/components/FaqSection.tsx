'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Preciso ter formação em teologia para aplicar o método?',
    a: 'Não. O Guia do Pai de cada lição prepara você com tudo que precisa saber antes de começar a conversa com seu filho. Se você sabe ler e tem vontade de aparecer, você consegue aplicar.',
  },
  {
    q: 'Meu filho tem 7 anos. Funciona?',
    a: 'O método foi calibrado para 8 a 12 anos. Com 7 anos, depende muito da maturidade da criança — alguns funcionam bem, outros podem achar algumas analogias ainda abstratas. A garantia de 14 dias cobre esse risco.',
  },
  {
    q: 'E se meu filho não quiser participar?',
    a: 'Isso é mais comum do que parece — e tem a ver com como a lição é apresentada. O Guia do Pai traz dicas específicas de engajamento para cada faixa etária. Na maioria dos casos, o problema some depois da primeira lição, quando a criança percebe que não é uma "aula".',
  },
  {
    q: 'Isso substitui a escola dominical ou a igreja?',
    a: 'Não. É um complemento. O Escudo de Fé faz o que a escola dominical não tem tempo de fazer: uma conversa profunda, individual, entre pai e filho, sobre as perguntas mais difíceis da fé.',
  },
  {
    q: 'Como recebo o material?',
    a: 'Imediatamente após a confirmação do pagamento, você recebe o link de acesso por e-mail. O material é em PDF — pode baixar, imprimir ou acessar em qualquer dispositivo.',
  },
  {
    q: 'Tem garantia?',
    a: '14 dias, sem burocracia. Se não gostar por qualquer razão, devolvemos 100% do valor.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-sans font-semibold text-sm text-text">{q}</span>
        <span
          className={`text-xl text-muted font-light flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64 pb-4' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="bg-cream py-16 px-6 border-t border-border" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto">
        <h2
          id="faq-heading"
          className="font-serif text-2xl md:text-3xl font-bold text-navy text-center mb-8"
        >
          Perguntas Frequentes
        </h2>
        <div className="bg-white rounded-2xl px-6 py-2 border border-border">
          {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
