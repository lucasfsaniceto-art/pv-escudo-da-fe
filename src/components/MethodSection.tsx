import Image from 'next/image'

const steps = [
  {
    num: '01',
    title: 'Estudo Guiado',
    desc: 'O Guia do Pai prepara você com os conceitos antes de cada lição — sem precisar estudar teologia antes.',
  },
  {
    num: '02',
    title: 'Conversa Natural',
    desc: 'Roteiro estruturado que transforma a lição em diálogo genuíno, sem forçar nenhuma das partes.',
  },
  {
    num: '03',
    title: 'Pensamento Crítico',
    desc: 'Argumentos lógicos e evidências reais — seu filho aprende a raciocinar sobre a fé, não apenas repeti-la.',
  },
  {
    num: '04',
    title: 'Fé Aplicada',
    desc: 'Quiz semanal e exercícios práticos que mantêm o aprendizado vivo durante toda a semana.',
  },
]

export default function MethodSection() {
  return (
    <section className="bg-surface-alt py-16 px-6" aria-labelledby="method-heading">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Steps */}
        <div>
          <h2
            id="method-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-on-surface mb-8 leading-snug"
          >
            Como Aplicar o Método<br />No Dia a Dia Do Seu Filho
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-ink text-accent font-sans font-black text-sm flex items-center justify-center">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-sans font-bold text-sm text-on-surface">{s.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/mockup.png"
            alt="Método Escudo de Fé — livros e dispositivos"
            width={420}
            height={420}
            className="w-full max-w-xs drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
