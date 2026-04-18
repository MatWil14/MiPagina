import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SKILLS = [
  { name: 'HTML',       pct: 92, color: '#E34F26' },
  { name: 'CSS',        pct: 88, color: '#1572B6' },
  { name: 'JavaScript', pct: 85, color: '#F59E0B' },
  { name: 'SQL',        pct: 78, color: '#CC2927' },
]

const TECH_ICONS = [
  {
    name: 'HTML5', color: '#E34F26',
    path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
  },
  {
    name: 'CSS3', color: '#1572B6',
    path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z',
  },
  {
    name: 'JavaScript', color: '#EAB308',
    path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
  },
  {
    name: 'SQL', color: '#CC2927',
    path: 'M12 0C5.373 0 0 2.686 0 6v12c0 3.314 5.373 6 12 6s12-2.686 12-6V6c0-3.314-5.373-6-12-6zm0 2c5.514 0 10 2.015 10 4.5S17.514 11 12 11 2 8.985 2 6.5 6.486 2 12 2zm0 17c-5.514 0-10-2.015-10-4.5v-2.285A17.2 17.2 0 0 0 12 14a17.2 17.2 0 0 0 10-1.785V14.5c0 2.485-4.486 4.5-10 4.5zm0-5c-5.514 0-10-2.015-10-4.5V9.215A17.2 17.2 0 0 0 12 11a17.2 17.2 0 0 0 10-1.785V14.5c0 2.485-4.486 4.5-10 4.5z',
  },
]

function SkillBar({ name, pct, color, visible }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-dark">{name}</span>
        <span className="text-xs font-bold text-muted">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{
            '--skill-width': `${pct}%`,
            width: visible ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, #7C3AED)`,
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section id="sobre-mi" className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        <div className="mb-14 reveal">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Quién soy</p>
          <h2 className="section-title font-heading font-bold text-3xl sm:text-5xl text-dark">
            Sobre Mí
          </h2>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 reveal">
          {[
            {
              icon: <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
              value: '2+', label: 'Años de experiencia',
            },
            {
              icon: <svg className="w-5 h-5 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>,
              value: '10+', label: 'Proyectos realizados',
            },
            {
              icon: <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
              value: '4', label: 'Tecnologías core',
            },
            {
              icon: <svg className="w-5 h-5 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
              value: '100%', label: 'Dedicación',
            },
          ].map(({ icon, value, label }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {icon}
              </div>
              <div>
                <p className="font-heading font-bold text-2xl gradient-text">{value}</p>
                <p className="text-muted text-xs mt-0.5 leading-snug">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <div className="reveal-left space-y-5">
            <p className="text-dark-2 text-base sm:text-lg leading-relaxed">
              Soy <strong className="text-dark font-semibold">Matias Wilder</strong>, desarrollador web
              enfocado en construir sitios y aplicaciones con los fundamentos del desarrollo:
              HTML semántico, CSS moderno, JavaScript y SQL.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Creo que dominar las bases es lo que diferencia a un buen desarrollador.
              Me interesa escribir código limpio, estructurado y fácil de mantener.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Actualmente en constante aprendizaje, buscando proyectos donde pueda
              aportar valor real y seguir creciendo profesionalmente.
            </p>

            {/* Tech icons */}
            <div className="mt-6">
              <p className="text-xs text-muted/60 uppercase tracking-widest mb-4 font-semibold">Stack principal</p>
              <div className="flex gap-3">
                {TECH_ICONS.map(({ name, color, path }) => (
                  <div
                    key={name}
                    title={name}
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center cursor-default hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color} aria-label={name} role="img">
                      <path d={path} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:Matiwilder07@gmail.com?subject=Solicitud%20de%20CV"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Solicitar CV por email
              </a>
            </div>
          </div>

          {/* Skill bars */}
          <div ref={skillsRef} className="reveal-right space-y-6">
            <p className="text-xs text-muted/60 uppercase tracking-widest font-semibold">Nivel de habilidades</p>
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} {...skill} visible={skillsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
