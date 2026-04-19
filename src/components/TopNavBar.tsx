export default function TopNavBar() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(720px,calc(100vw-2rem))]"
      aria-label="Navegação principal"
    >
      <div className="flex items-center justify-between px-5 py-3 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant/50 shadow-lg">
        <span className="font-serif font-bold text-primary text-base leading-none">
          Escudo de Fé
        </span>
        <a
          href="#planos"
          className="text-xs font-sans font-semibold tracking-wider uppercase text-on-secondary bg-secondary-container hover:bg-secondary hover:text-on-secondary px-4 py-2 rounded-full transition-colors duration-200"
        >
          Ver Planos
        </a>
      </div>
    </nav>
  )
}
