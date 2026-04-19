export default function GuaranteeSection() {
  return (
    <section className="bg-cream py-16 px-6 border-y border-border" aria-labelledby="guarantee-heading">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Seal */}
        <div
          className="flex-shrink-0 w-36 h-36 rounded-full border-4 border-gold bg-white flex flex-col items-center justify-center text-center shadow-md"
          aria-label="Garantia incondicional de 14 dias"
        >
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-muted">Garantia</span>
          <span className="font-serif text-4xl font-black text-navy leading-none">14</span>
          <span className="font-sans text-sm font-bold text-gold uppercase tracking-wide">dias</span>
          <span className="font-sans text-[8px] font-bold uppercase tracking-wide text-muted leading-tight mt-0.5">
            dinheiro<br />de volta
          </span>
        </div>
        {/* Text */}
        <div className="text-center md:text-left flex flex-col gap-3">
          <h3 id="guarantee-heading" className="font-serif text-2xl font-bold text-navy">
            Garantia Incondicional de 14 Dias
          </h3>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Aplique o método com seu filho. Faça as 4 lições. Veja o que acontece com as
            conversas de vocês dois.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Se em 14 dias você sentir que não valeu — por qualquer motivo, sem precisar justificar
            — manda um e-mail e devolvemos cada centavo.
          </p>
          <p className="font-sans text-sm font-semibold text-navy">
            A gente só pede uma coisa: tente de verdade antes de devolver. Porque a experiência
            que você vai ter com seu filho nessas 4 semanas não tem preço de devolução.
          </p>
        </div>
      </div>
    </section>
  )
}
