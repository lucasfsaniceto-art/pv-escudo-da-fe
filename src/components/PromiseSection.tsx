export default function PromiseSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-6" aria-labelledby="problem-heading">
      <div className="max-w-2xl mx-auto flex flex-col gap-7">
        <h2
          id="problem-heading"
          className="font-serif text-2xl md:text-3xl font-bold text-navy text-center leading-snug"
        >
          Todo pai cristão tem um medo que não fala em voz alta:
        </h2>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-gold bg-cream rounded-r-xl px-6 py-5">
          <p className="font-serif text-xl italic text-navy font-semibold">
            "E se meu filho crescer e abandonar a fé?"
          </p>
        </blockquote>

        <div className="font-sans text-sm text-muted leading-relaxed flex flex-col gap-4">
          <p>
            Não é um medo irracional. As estatísticas mostram que a maioria dos jovens que foram
            criados na igreja abandona as crenças entre os 15 e os 22 anos.
          </p>
          <p>
            E o pior: quando isso acontece, não é de uma hora para outra. Começa com uma dúvida
            pequena que ficou sem resposta. Depois outra. Depois outra.
          </p>
          <p>
            Até que um dia seu filho — que você levou para a Igreja Dominical toda semana da
            infância dele — olha para você e diz:{' '}
            <strong className="text-text">"Pai, eu acho que não acredito mais."</strong>
          </p>
          <p>
            E você não sabia que isso estava vindo. Porque ninguém te preparou para essas
            conversas. E ninguém preparou ele.
          </p>
        </div>

        <div className="bg-off-white border border-border rounded-2xl p-6">
          <p className="font-serif text-base font-semibold text-navy leading-snug text-center">
            O problema não é que seu filho vai ter dúvidas.
            <br />
            O problema é ter dúvidas sem nenhuma estrutura para resolvê-las.
          </p>
        </div>

        <div className="font-sans text-sm text-muted leading-relaxed flex flex-col gap-4">
          <p>
            Na escola, professores ensinam que ciência e fé se contradizem. Nas redes sociais,
            influenciadores derrubam argumentos religiosos em vídeos de 60 segundos. Nos grupos
            de amigos, quem acredita em Deus é o "ingênuo" da turma.
          </p>
          <p className="font-semibold text-text">
            Seu filho vai ser questionado. É só uma questão de quando.
          </p>
          <p>
            A diferença entre um jovem que sobrevive a esse furacão com a fé intacta e um que se
            perde nele não é falta de devoção. É falta de fundamento. É saber — ou não saber —
            responder quando alguém diz:
          </p>
          <ul className="flex flex-col gap-1 pl-4">
            {[
              '"Prove que Deus existe."',
              '"A Bíblia foi escrita por homens."',
              '"Se Deus é bom, por que há sofrimento?"',
            ].map((q) => (
              <li key={q} className="text-navy font-semibold italic">{q}</li>
            ))}
          </ul>
          <p>
            Essas perguntas têm respostas. Respostas sólidas, lógicas, que os maiores filósofos e
            teólogos do mundo desenvolveram ao longo de séculos.{' '}
            <strong className="text-text">Seu filho pode aprender essas respostas. Com 8 anos. Com você do lado.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
