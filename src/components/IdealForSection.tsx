const forItems = [
  'Seu filho já fez perguntas difíceis sobre Deus e você ficou sem resposta',
  'Você quer ter conversas de fé com ele mas não sabe por onde começar',
  'Você sente que a escola dominical está na superfície e quer ir mais fundo',
  'Você tem medo do que a escola, as redes sociais e os amigos vão fazer com a fé do seu filho nos próximos anos',
  'Você quer ser o pai (ou a mãe) que ele vai se lembrar quando as dúvidas difíceis chegarem — não o desconhecido que estava sempre ocupado',
]

const notForItems = [
  'Você quer que seu filho "só acredite" sem fazer perguntas',
  'Você acha que dúvidas são sinal de fraqueza espiritual',
  'Você espera uma cartilha de versículos para decorar',
]

export default function IdealForSection() {
  return (
    <section className="bg-cream py-16 px-6 border-y border-border" aria-labelledby="idealfor-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="idealfor-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-navy"
          >
            Este material foi criado para você se...
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {/* For column — 3/5 */}
          <div className="md:col-span-3 flex flex-col gap-3">
            {forItems.map((item) => (
              <div key={item} className="flex gap-3 items-start bg-white border border-border rounded-xl px-4 py-3.5">
                <span className="text-check font-bold text-base flex-shrink-0 leading-none mt-0.5">✓</span>
                <span className="font-sans text-sm text-text">{item}</span>
              </div>
            ))}
          </div>
          {/* Not for column — 2/5 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted px-1">
              Este material NÃO é para você se:
            </p>
            {notForItems.map((item) => (
              <div key={item} className="flex gap-3 items-start bg-off-white border border-border rounded-xl px-4 py-3.5 opacity-70">
                <span className="text-cross font-bold text-base flex-shrink-0 leading-none mt-0.5">✗</span>
                <span className="font-sans text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
