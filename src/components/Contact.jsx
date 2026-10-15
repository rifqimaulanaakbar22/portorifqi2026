import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'
import { profile } from '../data/profile.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="judul-kontak" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-14 text-center text-white sm:px-12">
          <div className="blob-shape absolute -left-16 -top-16 h-56 w-56 bg-brand-500" aria-hidden="true" />
          <div className="blob-shape absolute -bottom-20 -right-10 h-64 w-64 bg-brand-700" aria-hidden="true" style={{ animationDelay: '-6s' }} />
          <div className="relative">
            <h2 id="judul-kontak" className="text-3xl font-extrabold tracking-tight sm:text-4xl">Mari terhubung</h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-brand-100">
              Punya pertanyaan, ide, atau sekadar ingin menyapa? Kirim email, saya akan membalas secepatnya.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="btn mt-8 bg-white text-brand-700 hover:bg-brand-50"
            >
              <Mail size={18} aria-hidden="true" /> {profile.email}
            </a>
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {[
                { href: profile.whatsapp, label: 'WhatsApp', Icon: MessageCircle },
                { href: profile.github, label: 'GitHub', Icon: Github },
                { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
              ].filter((l) => l.href).map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="btn border border-white/40 text-white hover:bg-white/10">
                    <Icon size={18} aria-hidden="true" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
