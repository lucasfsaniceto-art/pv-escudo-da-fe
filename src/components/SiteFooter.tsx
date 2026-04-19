export default function SiteFooter() {
  return (
    <footer className="bg-navy border-t border-navy-border py-10 px-6 text-center" role="contentinfo">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        <p className="font-serif font-bold text-on-navy text-base">Método Escudo de Fé</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-on-navy/50">
          <a href="#" className="hover:text-on-navy/80 transition-colors">Termos de Uso</a>
          <span className="text-on-navy/20">·</span>
          <a href="#" className="hover:text-on-navy/80 transition-colors">Política de Privacidade</a>
          <span className="text-on-navy/20">·</span>
          <a href="mailto:contato@escudodafe.com.br" className="hover:text-on-navy/80 transition-colors">
            Suporte: contato@escudodafe.com.br
          </a>
        </div>
        <p className="font-sans text-xs text-on-navy/25">
          Copyright © 2026 — Método Escudo de Fé · Todos os direitos reservados
        </p>
        <p className="font-sans text-xs text-on-navy/20 max-w-md leading-relaxed">
          Este produto é de natureza educacional e não substitui aconselhamento pastoral ou
          psicológico profissional. Os resultados mencionados são individuais e podem variar.
        </p>
      </div>
    </footer>
  )
}
