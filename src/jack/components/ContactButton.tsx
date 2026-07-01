interface ContactButtonProps {
  className?: string
  href?: string
  label?: string
}

const BASE_CLASS =
  'btn-accent inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base'

export const ContactButton = ({
  className = '',
  href,
  label = 'Contact Me',
}: ContactButtonProps) => {
  const cls = `${BASE_CLASS} ${className}`.trim()
  if (href) {
    return (
      <a href={href} className={cls}>
        {label}
      </a>
    )
  }
  return (
    <button type="button" className={cls}>
      {label}
    </button>
  )
}
