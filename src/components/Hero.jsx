import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="beranda" aria-labelledby="judul-hero" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-16">
      <div className="container-x grid items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <p className="hero-in text-base font-medium text-brand-600">{profile.greeting}</p>
          <h1 id="judul-hero" className="hero-in hero-in-2 mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="hero-in hero-in-2 mt-3 text-xl font-semibold text-brand-700 sm:text-2xl">{profile.role}</p>
          <p className="hero-in hero-in-3 mt-5 max-w-lg text-lg font-medium text-ink">{profile.headline}</p>
          <p className="hero-in hero-in-3 mt-3 max-w-lg leading-relaxed text-ink-soft">{profile.intro}</p>
          <div className="hero-in hero-in-3 mt-8 flex flex-wrap gap-3">
            <a href="#portofolio" className="btn btn-primary">
              Lihat Proyek Saya <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#kontak" className="btn btn-outline">
              <Mail size={16} aria-hidden="true" /> Hubungi Saya
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div className="blob-shape absolute -inset-4 -z-0 bg-brand-200" aria-hidden="true" />
            <div className="blob-shape absolute inset-0 translate-x-4 translate-y-4 bg-brand-500" aria-hidden="true" style={{ animationDelay: '-5s' }} />
            <div className="blob-shape relative h-full w-full overflow-hidden bg-brand-100" style={{ animationDelay: '-9s' }}>
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="400"
                height="400"
                className="h-full w-full object-cover object-[50%_25%]"
              />
            </div>
            {profile.photoIsPlaceholder && (
              <span className="placeholder-badge absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap shadow">
                Foto placeholder
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
