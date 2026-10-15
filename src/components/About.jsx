import { profile } from '../data/profile.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="tentang" aria-labelledby="judul-tentang" className="section-pad">
      <div className="container-x grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-square w-full max-w-xs">
            <div className="blob-shape absolute inset-0 -rotate-6 bg-brand-100" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              loading="lazy"
              width="400"
              height="400"
              className="relative h-full w-full rounded-card object-cover object-[50%_25%] shadow-lg"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <SectionHeading id="judul-tentang" title="Tentang saya" />
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
