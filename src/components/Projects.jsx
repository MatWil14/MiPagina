import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import projectsData from '../data/projects.json'
import ProjectCard  from './ProjectCard'

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const displayed = filter === 'featured'
    ? projectsData.filter((p) => p.featured)
    : projectsData

  return (
    <section id="proyectos" className="relative py-24 px-4 bg-surface-2 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        <div className="mb-14 reveal">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">{t.projects.eyebrow}</p>
          <h2 className="section-title font-heading font-bold text-3xl sm:text-5xl text-dark mb-6">
            {t.projects.title}
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mt-6">
            {t.projects.description}
          </p>
        </div>

        <div className="flex gap-3 mb-10 reveal">
          {[
            { key: 'all',      label: t.projects.all },
            { key: 'featured', label: t.projects.featured },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent ${
                filter === key
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-white border border-slate-200 text-muted hover:text-dark hover:border-slate-300 shadow-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {displayed.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} viewBtn={t.projects.viewBtn} />
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-xs mt-12 reveal">
          {t.projects.hint}{' '}
          <code className="text-accent/60 font-mono">src/data/projects.json</code>
        </p>
      </div>
    </section>
  )
}
