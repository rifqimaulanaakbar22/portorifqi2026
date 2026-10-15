import { Code2, Layout, Server, Database, Wrench } from 'lucide-react'
import { skillGroups } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'

const icons = { Code2, Layout, Server, Database, Wrench }

export default function Skills() {
  return (
    <section id="keahlian" aria-labelledby="judul-keahlian" className="section-pad bg-brand-50/60">
      <div className="container-x">
        <SectionHeading
          id="judul-keahlian"
          title="Keahlian"
          subtitle="Teknologi dan tools yang saya gunakan."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon] ?? Code2
            return (
              <div key={g.title} className="rounded-card bg-white p-6 shadow-sm ring-1 ring-brand-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
