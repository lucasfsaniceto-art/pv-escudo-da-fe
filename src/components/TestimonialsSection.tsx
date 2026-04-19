const testimonials = [
  {
    text: '"Meu filho de 9 anos sempre fez perguntas que eu ficava sem saber responder. Eu devolvia com \'porque Deus quer\' e ele claramente não ficava satisfeito. Depois da Lição 1, ele me explicou o Argumento Cosmológico para o irmão mais velho. O irmão mais velho tem 15 anos."',
    author: 'Ana Paula R.',
    role: 'Mãe de menino de 9 anos',
  },
  {
    text: '"Eu ia para a lição mais nervoso do que meu filho. Achei que ia travar nas perguntas dele. Mas o roteiro de conversa é tão bem feito que a lição fluiu natural — parecia que a gente estava só batendo papo. Na Lição 3 ele chorou. Eu também."',
    author: 'Ricardo M.',
    role: 'Pai de menino de 11 anos',
  },
  {
    text: '"Minha filha perguntou por que Deus deixou a vovó morrer. Fui buscar a Lição 3 às 11 da noite e fiz com ela no dia seguinte. Não tinha resposta pronta para essa dor — mas o método me deu as palavras certas. Ela dormiu em paz. Eu também."',
    author: 'Juliana S.',
    role: 'Mãe solo',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy"
          >
            O que os pais estão dizendo depois de aplicar o método:
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="bg-cream border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-gold text-sm">★★★★★</div>
              <p className="font-sans text-sm text-muted leading-relaxed italic flex-1">{t.text}</p>
              <footer className="border-t border-border pt-4">
                <p className="font-sans font-bold text-sm text-navy">{t.author}</p>
                <p className="font-sans text-xs text-muted">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
