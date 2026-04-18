const EMAIL    = 'Matiwilder07@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/mat%C3%ADaswilder'

const NAV = [
  { label: 'Inicio',    href: 'inicio' },
  { label: 'Proyectos', href: 'proyectos' },
  { label: 'Sobre Mí', href: 'sobre-mi' },
  { label: 'Contacto', href: 'contacto' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          <div className="space-y-3">
            <p className="font-heading font-bold text-2xl gradient-text">MW</p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Desarrollador web creando sitios funcionales y bien estructurados.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Navegación</p>
            <ul className="space-y-2">
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-muted hover:text-accent text-sm transition-colors duration-200 cursor-pointer focus:outline-none focus:underline"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Contacto</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${EMAIL}`}
                  className="text-muted hover:text-accent text-sm transition-colors duration-200 cursor-pointer focus:outline-none focus:underline">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-accent text-sm transition-colors duration-200 cursor-pointer focus:outline-none focus:underline">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted/50 text-xs">
            © {new Date().getFullYear()} Matias Wilder. Todos los derechos reservados.
          </p>
          <p className="text-muted/40 text-xs">Hecho con React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
