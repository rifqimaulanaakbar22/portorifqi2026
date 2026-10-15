import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, X, FolderGit2 } from 'lucide-react'
import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectVisual({ project, className }) {
  if (project.image) {
    return <img src={project.image} alt={project.imageAlt} loading="lazy" className={`${className} object-cover`} />
  }
  return (
    <div
      role="img"
      aria-label={`Ilustrasi proyek ${project.title}`}
      className={`${className} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-500 to-brand-700 text-white`}
    >
      <FolderGit2 size={40} aria-hidden="true" />
      {project.badge && <span className="px-4 text-center text-sm font-semibold">{project.badge}</span>}
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (project && dlg && !dlg.open) dlg.showModal()
    if (!project && dlg?.open) dlg.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="judul-modal"
      className="w-[calc(100%-2rem)] max-w-2xl rounded-card p-0 backdrop:bg-ink/60"
    >
      {project && (
        <div className="max-h-[85vh] overflow-y-auto">
          <ProjectVisual project={project} className="aspect-[32/15] w-full" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 id="judul-modal" className="text-2xl font-extrabold">{project.title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="rounded-full p-2 hover:bg-brand-50"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {project.status && <span className="tag">Status: {project.status}</span>}
              {project.placeholder && <span className="placeholder-badge">Proyek contoh</span>}
            </div>
            <p className="mt-4 leading-relaxed text-ink-soft">{project.summary}</p>

            {project.role && (
              <>
                <h4 className="mt-6 font-bold">Peran saya</h4>
                <p className="mt-1 text-ink-soft">{project.role}</p>
              </>
            )}

            <h4 className="mt-6 font-bold">Fitur utama</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            {project.tech.length > 0 && (
              <>
                <h4 className="mt-6 font-bold">Teknologi</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
              </>
            )}

            {(project.github || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Github size={16} aria-hidden="true" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} aria-hidden="true" /> Lihat Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="portofolio" aria-labelledby="judul-portofolio" className="section-pad">
      <div className="container-x">
        <SectionHeading
          id="judul-portofolio"
          title="Portofolio"
          subtitle="Proyek-proyek yang saya kerjakan."
        />
        <div className={`grid gap-6 sm:grid-cols-2 ${projects.length > 2 ? 'lg:grid-cols-3' : ''}`}>
          {projects.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-brand-100 transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <ProjectVisual project={p} className="aspect-[32/15] w-full" />
                {p.placeholder && <span className="placeholder-badge absolute left-3 top-3">Contoh</span>}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                {p.tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => setSelected(p)} className="btn btn-primary !px-5 !py-2.5">
                    Lihat Detail
                  </button>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${p.title}`} className="rounded-full p-2 text-ink-soft hover:bg-brand-50 hover:text-brand-600">
                      <Github size={20} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo ${p.title}`} className="rounded-full p-2 text-ink-soft hover:bg-brand-50 hover:text-brand-600">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
