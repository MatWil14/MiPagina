import { useState, useEffect } from 'react'

const ROLES = [
  'Desarrollo Web Profesional',
  'Sitios a Medida',
  'Experiencias Digitales',
  'HTML · CSS · JS · SQL',
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'studio' }, { t: 'op', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'nombre' }, { t: 'op', v: ': ' }, { t: 'str', v: '"MW Studios"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'stack' }, { t: 'op', v: ': ' }, { t: 'op', v: '[' }, { t: 'str', v: '"HTML"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"CSS"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"JS"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"SQL"' }, { t: 'op', v: '],' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'proyectos' }, { t: 'op', v: ': ' }, { t: 'num', v: '10' }, { t: 'op', v: '+,' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'disponible' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
]

const TOKEN_COLORS = {
  keyword: '#7C3AED',
  var:     '#0F172A',
  key:     '#16A34A',
  str:     '#DC2626',
  bool:    '#EA580C',
  num:     '#2563EB',
  op:      '#64748B',
}

export default function Hero() {
  const [displayed,  setDisplayed]  = useState('')
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIndex]
    if (!isDeleting) {
      if (displayed === target) {
        const t = setTimeout(() => setIsDeleting(true), 2200)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }
    if (displayed === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
      return
    }
    const t = setTimeout(() => setDisplayed((p) => p.slice(0, -1)), 40)
    return () => clearTimeout(t)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden px-4 pt-20 pb-12 bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[140px] animate-float" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-violet/8 blur-[140px] animate-float-delay" />
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div className="order-2 lg:order-1">

            <div
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-7 animate-fade-in"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold">Disponible para proyectos</span>
            </div>

            <h1
              className="font-heading font-bold mb-4 animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.1s' }}
            >
              <span className="block text-muted text-lg sm:text-xl font-medium tracking-widest uppercase mb-2">
                Estudio de desarrollo web
              </span>
              <span className="gradient-text text-5xl sm:text-7xl md:text-8xl leading-[1.05]">
                MW<br />Studios
              </span>
            </h1>

            <div
              className="flex items-center gap-2 mb-5 h-9 animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.25s' }}
            >
              <span className="w-8 h-px bg-accent/50" />
              <p className="font-heading text-base sm:text-lg text-muted font-medium">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-cursor-blink align-middle" />
              </p>
            </div>

            <p
              className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.38s' }}
            >
              Creamos sitios web modernos, funcionales y a medida.
              Desde la idea hasta el deploy, con foco en calidad y resultados.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.5s' }}
            >
              <button
                onClick={() => scrollTo('proyectos')}
                className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Ver proyectos
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('contacto')}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-accent/40 hover:bg-slate-50 text-dark font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer hover:-translate-y-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                Contactarnos
              </button>
            </div>

            <div
              className="flex gap-8 pt-6 border-t border-slate-100 animate-fade-in"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.7s' }}
            >
              {[
                { value: '10+', label: 'Proyectos' },
                { value: '2+',  label: 'Años exp.' },
                { value: '4',   label: 'Tecnologías' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading font-bold text-2xl sm:text-3xl gradient-text">{value}</p>
                  <p className="text-muted text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Code card */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in"
            style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/15 to-violet/15 blur-2xl scale-105" />

              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-400 text-xs font-mono">mw-studios.js</span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-7">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      {line.tokens.map((tok, j) => (
                        <span key={j} style={{ color: TOKEN_COLORS[tok.t] }}>{tok.v}</span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-accent text-white text-xs font-mono">
                  <span>✓ listos para tu proyecto</span>
                  <span>MW Studios</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-25" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(rgba(22,163,74,0.7) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
              <div className="absolute -top-4 -left-4 w-16 h-16 opacity-25" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.7) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-30" aria-hidden="true">
        <span className="text-muted text-[9px] tracking-[0.25em] uppercase">scroll</span>
        <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
