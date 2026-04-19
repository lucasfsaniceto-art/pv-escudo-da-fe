import Image from 'next/image'

export default function HeroSection() {
  return (
    <header className="bg-cream py-16 md:py-24 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
            Construa a Fé do Seu Filho{' '}
            <em className="not-italic text-gold">Antes que Alguém a Derrube</em>
          </h1>

          <p className="font-sans text-base text-muted leading-relaxed">
            O Método Escudo de Fé transforma crianças de 8 a 12 anos em filhos que{' '}
            <strong className="text-text font-semibold">pensam a fé — não apenas repetem</strong>.
            4 lições de apologética prática para você fazer junto com seu filho, uma por semana,
            em menos de uma hora.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed -mt-2">
            Sem precisar ser teólogo. Sem precisar improvisar. Sem deixar seu filho chegar na
            adolescência sem respostas.
          </p>

          {/* Mobile mockup */}
          <div className="block md:hidden">
            <Image
              src="/mockup.png"
              alt="Método Escudo de Fé"
              width={400}
              height={400}
              className="w-full max-w-xs mx-auto drop-shadow-xl"
              priority
            />
          </div>

          <a
            href="#planos"
            className="btn-pulse inline-block text-center bg-navy text-on-navy font-sans font-extrabold text-base uppercase tracking-wide px-8 py-4 rounded-full shadow-lg hover:bg-navy-dark transition-colors duration-200 w-full sm:w-fit"
          >
            QUERO BLINDAR A FÉ DO MEU FILHO AGORA →
          </a>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-muted border-t border-border pt-4">
            <span>🔒 Compra 100% segura</span>
            <span>💳 Pix · Cartão · Boleto</span>
            <span>⚡ Acesso imediato</span>
          </div>

          <p className="font-sans text-xs font-semibold text-muted uppercase tracking-widest">
            ★★★★★ Mais de 500 famílias já aplicando o método com seus filhos
          </p>
        </div>

        {/* Right: mockup (desktop) */}
        <div className="hidden md:flex items-center justify-center order-1 md:order-2">
          <Image
            src="/mockup.png"
            alt="Método Escudo de Fé"
            width={520}
            height={520}
            className="w-full max-w-sm drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </header>
  )
}
