import { GraduationCap } from 'lucide-react'
import { journey } from '../data/journey.js'
import { education } from '../data/education.js'
import SectionHeading from './SectionHeading.jsx'

export default function Journey() {
  return (
    <section id="perjalanan" aria-labelledby="judul-perjalanan" className="section-pad bg-brand-50/60">
      <div className="container-x grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SectionHeading id="judul-perjalanan" title="Perjalanan saya" subtitle="Proses belajar dan pengalaman yang membentuk cara kerja saya." />
          <ol className="relative space-y-8 border-l-2 border-brand-200 pl-8">
            {journey.map((j) => (
              <li key={j.title} className="relative">
                <span className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-brand-50 bg-brand-500" aria-hidden="true" />
                <p className="text-sm font-semibold text-brand-600">{j.period}</p>
                <h3 className="mt-1 text-lg font-bold">
                  {j.title} {j.placeholder && <span className="placeholder-badge ml-2 align-middle">Contoh</span>}
                </h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-6 text-2xl font-extrabold">Pendidikan</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.institution} className="flex gap-4 rounded-card bg-white p-6 shadow-sm ring-1 ring-brand-100">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold">{e.institution}</p>
                  <p className="text-ink-soft">{e.program}</p>
                  <p className="mt-1 text-sm text-brand-600">{e.period}</p>
                  {e.placeholder && <span className="placeholder-badge mt-2 inline-block">Contoh</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
