import projectsData from '../data/projects.json'
import ProjectCard  from './ProjectCard'

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24 px-4 bg-surface-2 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        <div className="mb-14 reveal">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Portafolio</p>
          <h2 className="section-title font-heading font-bold text-3xl sm:text-5xl text-dark mb-6">
            Mis Proyectos
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mt-6">
            Proyectos deployados en Vercel, construidos con foco en rendimiento,
            diseño limpio y buena experiencia de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projectsData.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-xs mt-12 reveal">
          Para agregar un proyecto editá{' '}
          <code className="text-accent/60 font-mono">src/data/projects.json</code>
        </p>
      </div>
    </section>
  )
}
