const lessons = [
  {
    num: 'Lição 1',
    title: 'Como Sabemos que Deus Existe?',
    desc: 'O Argumento Cosmológico Kalam — o argumento que nunca foi refutado com sucesso em nenhum debate filosófico — explicado com LEGO e dominós. Seu filho vai aprender a responder "prove que Deus existe" antes de chegar ao ensino médio.',
    accent: 'border-t-navy',
  },
  {
    num: 'Lição 2',
    title: 'Como Sabemos que a Bíblia é Confiável?',
    desc: 'Quando alguém disser "a Bíblia foi escrita por homens", seu filho vai saber que temos 5.800 manuscritos gregos do Novo Testamento — dez vezes mais do que qualquer outra obra da antiguidade. Historiadores aceitam os escritos de César com 10 manuscritos. Sem questionar.',
    accent: 'border-t-gold',
  },
  {
    num: 'Lição 3',
    title: 'Se Deus Existe, Por Que Há Sofrimento?',
    desc: 'A pergunta mais emocional que existe — e a que mais derruba jovens em crise. Seu filho vai aprender a diferença entre livre-arbítrio, mundo caído e a resposta mais poderosa de todas: Deus não ficou distante do sofrimento. Ele entrou nele.',
    accent: 'border-t-navy',
  },
  {
    num: 'Lição 4',
    title: 'O Que Deus Quer de Mim?',
    desc: 'Fecha o ciclo. Depois de entender que Deus existe, que a Bíblia é confiável e que o sofrimento tem resposta, a pergunta natural é: "e daí?" Esta lição transforma o intelectual em pessoal.',
    accent: 'border-t-gold',
  },
]

export default function LessonsSection() {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="lessons-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
            As 4 Lições
          </span>
          <h2
            id="lessons-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy mt-2"
          >
            O que você e seu filho vão aprender juntos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {lessons.map((l) => (
            <article
              key={l.num}
              className={`bg-cream border border-border rounded-2xl p-6 flex flex-col gap-3 border-t-4 ${l.accent}`}
            >
              <span className="font-sans text-xs font-black uppercase tracking-widest text-muted">
                {l.num}
              </span>
              <h3 className="font-serif text-lg font-bold text-navy leading-snug">{l.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{l.desc}</p>
            </article>
          ))}
        </div>

        {/* Emotional anchor */}
        <div className="mt-8 bg-navy rounded-2xl p-7 text-center flex flex-col gap-3">
          <p className="font-sans text-sm font-semibold text-on-navy/80 uppercase tracking-wider">
            Cada lição vem com:
          </p>
          <p className="font-serif text-lg text-on-navy leading-snug">
            Guia do Pai · Roteiro de Conversa · Exercício Prático · Quiz Semanal · Card para WhatsApp
          </p>
          <p className="font-sans text-sm text-on-navy/60 mt-1">
            Você não precisa saber apologética.{' '}
            <strong className="text-on-navy/90">Você precisa aparecer.</strong>{' '}
            O método faz o resto.
          </p>
        </div>
      </div>
    </section>
  )
}
