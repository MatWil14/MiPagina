import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LANGS = ['es', 'en', 'pt']

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen,      setMenuOpen]      = useState(false)

  const NAV_LINKS = [
    { label: t.nav.inicio,    href: 'inicio' },
    { label: t.nav.proyectos, href: 'proyectos' },
    { label: t.nav.sobreMi,   href: 'sobre-mi' },
    { label: t.nav.contacto,  href: 'contacto' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = ['inicio', 'proyectos', 'sobre-mi', 'contacto']
      const current = ids.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 120 && bottom >= 120
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo('inicio')}
          className="font-heading font-bold text-xl gradient-text cursor-pointer hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent rounded tracking-tight"
          aria-label="Ir al inicio"
        >
          MW Studios
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = activeSection === href
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`relative font-medium text-sm transition-colors duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                    active ? 'text-accent' : 'text-muted hover:text-dark'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-slate-100 rounded-lg p-0.5">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none ${
                  lang === l
                    ? 'bg-white text-accent shadow-sm'
                    : 'text-muted hover:text-dark'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="mailto:Matiwilder07@gmail.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.nav.cta}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-dark rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-dark rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-dark rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => { scrollTo(href); setMenuOpen(false) }}
              className={`text-left font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === href ? 'text-accent' : 'text-muted hover:text-dark'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Mobile lang switcher */}
          <div className="flex items-center gap-1 pt-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  lang === l ? 'bg-accent text-white' : 'bg-slate-100 text-muted hover:text-dark'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="mailto:Matiwilder07@gmail.com"
            className="text-center bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
