const TECH_COLORS = {
  React: '#61DAFB', TypeScript: '#3178C6', JavaScript: '#F59E0B',
  HTML: '#E34F26', CSS: '#1572B6', 'Node.js': '#339933',
  MongoDB: '#47A248', 'Tailwind CSS': '#06B6D4', Supabase: '#3ECF8E',
  'Chart.js': '#FF6384', 'REST API': '#64748B', SQL: '#CC2927',
  'C#': '#9B59B6', Vite: '#646CFF', Vercel: '#0F172A',
  'OpenWeather API': '#EB6E4B',
}

function TechBadge({ tech }) {
  const color = TECH_COLORS[tech] ?? '#64748B'
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-dark-2 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      {tech}
    </span>
  )
}

export default function ProjectCard({ project, viewBtn = 'Ver proyecto' }) {
  const { name, description, technologies, link } = project

  return (
    <article className="glow-card rounded-2xl p-6 flex flex-col gap-4 h-full cursor-default">
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          </svg>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label={`Abrir ${name}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="flex-1">
        <h3 className="font-heading font-semibold text-lg text-dark mb-2">{name}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => <TechBadge key={tech} tech={tech} />)}
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded mt-auto">
        {viewBtn}
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </article>
  )
}
