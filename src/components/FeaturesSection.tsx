export default function FeaturesSection() {
  return (
    <section className="bg-cream py-16 px-6 border-y border-border" aria-labelledby="solution-heading">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
            A Solução
          </span>
          <h2
            id="solution-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy mt-2 leading-snug"
          >
            Apresentando o Método Escudo de Fé:
            <span className="block font-normal italic text-xl mt-1 text-muted">
              A apologética que um pai pode ensinar ao próprio filho
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 font-sans text-sm text-muted leading-relaxed">
          <p>
            O Escudo de Fé não é uma cartilha religiosa. Não é uma apostila de escola dominical.
            Não é um devocional para ler e esquecer.
          </p>
          <p>
            É um método estruturado de 4 semanas onde você — pai ou mãe — senta com seu filho e
            conduz uma conversa real sobre as perguntas mais difíceis que existem sobre a fé.
          </p>
          <p>
            Cada lição dura <strong className="text-text">menos de uma hora</strong>. Cada conversa
            usa analogias que uma criança de 8 anos entende. E ao final das 4 semanas, seu filho
            vai ter aprendido os mesmos argumentos que filósofos como William Lane Craig usam para
            debater com os maiores ateus do mundo.
          </p>
          <p className="font-semibold text-navy text-base">
            Não é fé cega. É fé fundamentada.
          </p>
        </div>
      </div>
    </section>
  )
}
