const features = [
  '4 Lições completas (Lições 1 a 4)',
  'Guia do Pai em cada lição',
  'Roteiro de Conversa pronto',
  'Quiz Semanal + Card WhatsApp',
  'Bônus #1: As 10 Perguntas que Todo Ateu Faz (R$29,90)',
  'Bônus #2: Devocional 30 Dias (R$19,90)',
  'Bônus #3: Guia de 50 Perguntas (R$17,90)',
]

export default function PricingSection() {
  return (
    <section id="planos" className="bg-white py-16 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
            🏆 Oferta especial de lançamento
          </span>
          <h2
            id="pricing-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy mt-2"
          >
            Garanta o Seu Acesso
          </h2>
        </div>

        <article className="bg-white border-2 border-navy rounded-2xl overflow-hidden flex flex-col shadow-xl">
          <div className="bg-gold text-navy text-xs font-sans font-black uppercase tracking-widest text-center py-1.5">
            ⭐ ACESSO COMPLETO — TUDO INCLUÍDO
          </div>
          <div className="bg-navy px-6 py-6 text-center">
            <p className="font-sans font-bold text-on-navy text-base">Escudo de Bronze — Completo</p>
            <p className="font-sans text-xs text-on-navy/60 mt-1">4 lições + 3 bônus exclusivos</p>
            <p className="font-sans text-xs text-on-navy/40 line-through mt-4">De R$&nbsp;97,60</p>
            <p className="font-serif text-5xl font-bold text-gold mt-1">R$&nbsp;29<span className="text-3xl">,90</span></p>
            <p className="font-sans text-xs text-on-navy/60 mt-1">ou 12x de R$&nbsp;2,49</p>
            <p className="font-sans text-xs font-semibold text-check mt-2">Você economiza R$&nbsp;67,70</p>
          </div>
          <div className="px-6 py-6 flex flex-col gap-5 flex-1">
            <ul className="flex flex-col gap-2.5">
              {features.map((f) => (
                <li key={f} className="flex gap-2.5 items-start font-sans text-sm">
                  <span className="flex-shrink-0 font-bold leading-none mt-0.5 text-check">✓</span>
                  <span className="text-text">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://pay.cakto.com.br/34r68nd"
              className="btn-pulse mt-2 block text-center bg-navy text-on-navy font-sans font-black text-sm uppercase tracking-wide px-6 py-4 rounded-full hover:bg-navy-dark transition-colors shadow-md"
            >
              GARANTIR A BASE DA FÉ DO MEU FILHO AGORA →
            </a>
            <p className="font-sans text-xs text-muted text-center">
              🔒 Pagamento 100% seguro · Pix, cartão ou boleto
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
