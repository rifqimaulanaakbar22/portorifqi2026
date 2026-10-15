import { ExternalLink } from 'lucide-react'
import { certificates } from '../data/certificates.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certificates() {
  if (!certificates.length) return null
  return (
    <section id="sertifikasi" aria-labelledby="judul-sertifikasi" className="section-pad">
      <div className="container-x">
        <SectionHeading id="judul-sertifikasi" title="Sertifikasi" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-brand-100">
              {c.image && (
                <img src={c.image} alt={`Sertifikat ${c.title}`} loading="lazy" className="aspect-[4/3] w-full bg-brand-50 object-contain" />
              )}
              <div className="p-5">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-sm text-ink-soft">{c.issuer}{c.year ? ` · ${c.year}` : ''}</p>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
                    Verifikasi <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
