import { useState, useEffect } from 'react'

const ROLES = [
  'Desarrollador Web',
  'Frontend Developer',
  'JavaScript Developer',
  'Web Designer',
]

const FLOATING_BADGES = [
  { label: 'HTML',       color: '#E34F26', pos: 'top-6 -left-4 sm:-left-10' },
  { label: 'CSS',        color: '#1572B6', pos: 'bottom-16 -left-2 sm:-left-8' },
  { label: 'JavaScript', color: '#F59E0B', pos: 'top-10 -right-4 sm:-right-10' },
  { label: 'SQL',        color: '#CC2927', pos: 'bottom-8 -right-2 sm:-right-8' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [displayed,  setDisplayed]  = useState('')
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [imgError,   setImgError]   = useState(false)

  useEffect(() => {
    const target = ROLES[roleIndex]
    if (!isDeleting) {
      if (displayed === target) {
        const t = setTimeout(() => setIsDeleting(true), 2200)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 100)
      return () => clearTimeout(t)
    }
    if (displayed === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
      return
    }
    const t = setTimeout(() => setDisplayed((p) => p.slice(0, -1)), 50)
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

          {/* LEFT */}
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
              <span className="block text-muted text-lg sm:text-xl font-medium tracking-widest uppercase mb-1">
                Hola, soy
              </span>
              <span className="gradient-text text-4xl sm:text-6xl md:text-7xl leading-[1.1]">
                Matias<br />Wilder
              </span>
            </h1>

            <div
              className="flex items-center gap-2 mb-5 h-9 animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.25s' }}
            >
              <span className="w-8 h-px bg-accent/50" />
              <p className="font-heading text-lg sm:text-xl text-muted font-medium">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-cursor-blink align-middle" />
              </p>
            </div>

            <p
              className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.38s' }}
            >
              Construyo sitios web limpios, funcionales y bien estructurados.
              Especializado en los fundamentos del desarrollo web.
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
                Contactarme
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

          {/* RIGHT — Photo */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in"
            style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Soft glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-violet/20 blur-2xl scale-110" />

              {/* Gradient border */}
              <div
                className="absolute -inset-[2px] rounded-3xl animate-gradient-x"
                style={{
                  background: 'linear-gradient(135deg, #16A34A, #7C3AED, #16A34A)',
                  backgroundSize: '200% 200%',
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-slate-100">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Matias Wilder"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 gap-3">
                    <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-muted/60 text-xs text-center px-4">
                      Guardá tu foto como<br />
                      <code className="text-accent/70 font-mono">public/profile.jpg</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Floating tech badges */}
              {FLOATING_BADGES.map(({ label, color, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} bg-white border border-slate-200 shadow-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-dark z-20`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  {label}
                </div>
              ))}

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-30" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(rgba(22,163,74,0.6) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }}
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.6) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-30" aria-hidden="true">
        <span className="text-muted text-[9px] tracking-[0.25em] uppercase">scroll</span>
        <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
