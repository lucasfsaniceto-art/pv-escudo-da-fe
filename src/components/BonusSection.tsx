import Image from 'next/image'

const bonuses = [
  {
    img: '/bonus-ateu.png',
    num: 'Bônus #1',
    title: 'As 10 Perguntas que Todo Ateu Faz — e Como Responder',
    value: 'Valor real: R$29,90',
    desc: 'Na prática, as objeções contra o cristianismo se repetem. "A Bíblia contradiz a ciência." "Religião é muleta emocional." "Se Deus existe, por que o inferno?" Este guia dá a você e ao seu filho respostas diretas, lógicas e sem jargão teológico para as 10 mais comuns.',
  },
  {
    img: '/bonus-devocional.png',
    num: 'Bônus #2',
    title: 'Devocional Escudo de Fé — 30 Dias de Reflexão Familiar',
    value: 'Valor real: R$19,90',
    desc: '30 devocionais curtos — um por dia — conectados ao conteúdo das 4 lições. Para manter a conversa viva depois que o método terminar. Cada devocional tem uma pergunta, uma reflexão e uma aplicação prática para a semana.',
  },
  {
    img: '/bonus-conversas.png',
    num: 'Bônus #3',
    title: 'Guia de Perguntas: 50 Conversas de Fé para o Dia a Dia',
    value: 'Valor real: R$17,90',
    desc: 'O maior erro dos pais cristãos é reservar a fé para o domingo. Este guia traz 50 perguntas abertas para usar no carro, na mesa do jantar, antes de dormir — naturais o suficiente para não parecer sermão, profundas o suficiente para construir convicção.',
  },
]

export default function BonusSection() {
  return (
    <section className="bg-cream py-16 px-6 border-y border-border" aria-labelledby="bonus-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="bonus-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy"
          >
            E quem escolher o Plano Completo ainda leva:
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b) => (
            <article
              key={b.num}
              className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Book cover */}
              <div className="flex items-center justify-center bg-off-white p-4">
                <Image
                  src={b.img}
                  alt={b.title}
                  width={160}
                  height={220}
                  className="h-44 w-auto object-contain drop-shadow-md"
                />
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="font-sans text-xs font-black uppercase tracking-widest text-muted">
                  {b.num}
                </span>
                <h3 className="font-sans font-bold text-sm text-text leading-snug">{b.title}</h3>
                <span className="inline-block bg-check/10 text-check text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
                  {b.value} — GRÁTIS
                </span>
                <p className="font-sans text-xs text-muted leading-relaxed">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
