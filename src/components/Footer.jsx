import { profile } from '../data/profile.js'

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 px-5 py-10 sm:px-8">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} {profile.name}. Semua hak dilindungi.
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink-soft hover:text-brand-600">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
