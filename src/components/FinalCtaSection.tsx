export default function FinalCtaSection() {
  return (
    <section className="bg-navy py-16 px-6 text-center" aria-labelledby="finalcta-heading">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
        <h2
          id="finalcta-heading"
          className="font-serif text-2xl md:text-3xl font-bold text-on-navy leading-snug"
        >
          Seu filho não vai te perguntar:{' '}
          <em className="italic font-normal text-on-navy/70">
            "Por que você não me ensinou apologética?"
          </em>
        </h2>

        <p className="font-sans text-base text-on-navy/60 leading-relaxed">
          Ele vai só... ir embora da fé. Em silêncio. Sem avisar.
        </p>

        <div className="w-12 h-px bg-gold mx-auto" />

        <div className="font-sans text-sm text-on-navy/60 leading-relaxed flex flex-col gap-3 max-w-md">
          <p>
            As perguntas que derrubam a fé dos jovens não aparecem de repente na adolescência.
            Elas vão sendo plantadas aos poucos — na escola, nas redes, nos grupos de amigos
            — desde os 8, 9, 10 anos.
          </p>
          <p className="font-semibold text-on-navy/90">
            A janela para construir o fundamento é agora. Não quando ele já estiver com 16 anos
            e a dúvida já virou convicção.
          </p>
          <p>Agora. Enquanto ele ainda faz perguntas para você.</p>
        </div>

        <a
          href="#planos"
          className="btn-pulse inline-block bg-gold text-navy font-sans font-extrabold text-base uppercase tracking-wide px-8 py-4 rounded-full shadow-xl hover:bg-gold-light transition-colors duration-200"
        >
          GARANTIR A BASE DA FÉ DO MEU FILHO →
        </a>

        <div className="flex flex-wrap justify-center gap-5 text-xs font-sans text-on-navy/40">
          <span>🔒 Compra segura</span>
          <span>✅ Garantia de 14 dias</span>
          <span>⚡ Acesso imediato</span>
        </div>
      </div>
    </section>
  )
}
