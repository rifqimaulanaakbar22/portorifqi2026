export default function SectionHeading({ id, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 id={id} className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <span className={`mt-4 block h-1.5 w-14 rounded-full bg-brand-500 ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      {subtitle && <p className="mt-5 text-base leading-relaxed text-ink-soft">{subtitle}</p>}
    </div>
  )
}
