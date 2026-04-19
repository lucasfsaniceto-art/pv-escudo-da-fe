type Feature = { text: string; included: boolean }

const essencial: Feature[] = [
  { text: '4 Lições completas (Lições 1 a 4)', included: true },
  { text: 'Guia do Pai em cada lição', included: true },
  { text: 'Roteiro de Conversa pronto', included: true },
  { text: 'Quiz Semanal + Card WhatsApp', included: true },
  { text: 'Bônus #1, #2 e #3', included: false },
]

const completo: Feature[] = [
  { text: '4 Lições completas (Lições 1 a 4)', included: true },
  { text: 'Guia do Pai em cada lição', included: true },
  { text: 'Roteiro de Conversa pronto', included: true },
  { text: 'Quiz Semanal + Card WhatsApp', included: true },
  { text: 'Bônus #1: As 10 Perguntas que Todo Ateu Faz (R$29,90)', included: true },
  { text: 'Bônus #2: Devocional 30 Dias (R$19,90)', included: true },
  { text: 'Bônus #3: Guia de 50 Perguntas (R$17,90)', included: true },
]

function Row({ f }: { f: Feature }) {
  return (
    <li className={`flex gap-2.5 items-start font-sans text-sm ${!f.included ? 'opacity-35' : ''}`}>
      <span className={`flex-shrink-0 font-bold leading-none mt-0.5 ${f.included ? 'text-check' : 'text-cross'}`}>
        {f.included ? '✓' : '✗'}
      </span>
      <span className={!f.included ? 'line-through text-muted' : 'text-text'}>{f.text}</span>
    </li>
  )
}

export default function PricingSection() {
  return (
    <section id="planos" className="bg-white py-16 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
            🏆 Escolha o seu plano
          </span>
          <h2
            id="pricing-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy mt-2"
          >
            Escolha o Melhor Plano Para Você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {/* Essencial */}
          <article className="bg-cream border border-border rounded-2xl overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-border text-center">
              <p className="font-sans font-bold text-text text-base">Plano Essencial</p>
              <p className="font-sans text-xs text-muted mt-1">Para começar com o essencial</p>
              <p className="font-sans text-xs text-muted line-through mt-3">De R$&nbsp;69,90</p>
              <p className="font-serif text-4xl font-bold text-navy mt-1">R$&nbsp;39<span className="text-2xl">,90</span></p>
              <p className="font-sans text-xs text-muted">ou 12x de R$&nbsp;3,99</p>
              <p className="font-sans text-xs font-semibold text-check mt-2">Você economiza R$&nbsp;30,00</p>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4 flex-1">
              <ul className="flex flex-col gap-2">
                {essencial.map((f) => <Row key={f.text} f={f} />)}
              </ul>
              <a
                href="https://pay.cakto.com.br/37o59sn"
                className="mt-auto block text-center bg-navy text-on-navy font-sans font-bold text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-navy-dark transition-colors duration-200"
              >
                QUERO O PLANO ESSENCIAL →
              </a>
            </div>
          </article>

          {/* Completo */}
          <article className="bg-white border-2 border-navy rounded-2xl overflow-hidden flex flex-col relative shadow-xl">
            <div className="bg-gold text-on-navy text-xs font-sans font-black uppercase tracking-widest text-center py-1.5">
              ⭐ MAIS ESCOLHIDO
            </div>
            <div className="bg-navy px-6 py-5 border-b border-navy-border text-center">
              <p className="font-sans font-bold text-on-navy text-base">Plano Completo</p>
              <p className="font-sans text-xs text-on-navy/60 mt-1">Tudo + os 3 bônus exclusivos</p>
              <p className="font-sans text-xs text-on-navy/40 line-through mt-3">De R$&nbsp;136,60</p>
              <p className="font-serif text-4xl font-bold text-gold mt-1">R$&nbsp;69<span className="text-2xl">,90</span></p>
              <p className="font-sans text-xs text-on-navy/60">ou 12x de R$&nbsp;6,99</p>
              <p className="font-sans text-xs font-semibold text-check mt-2">Você economiza R$&nbsp;66,70</p>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4 flex-1">
              <ul className="flex flex-col gap-2">
                {completo.map((f) => <Row key={f.text} f={f} />)}
              </ul>
              <a
                href="https://pay.cakto.com.br/cmhquf5_851479"
                className="btn-pulse mt-auto block text-center bg-navy text-on-navy font-sans font-black text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-navy-dark transition-colors shadow-md"
              >
                GARANTIR A BASE DA FÉ DO MEU FILHO AGORA →
              </a>
              <p className="font-sans text-xs text-muted text-center">
                🔒 Pagamento 100% seguro · Pix, cartão ou boleto
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
