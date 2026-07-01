import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CopyEmailProps {
  email: string
  className?: string
}

/**
 * Fallback conversion path for the mailto: CTA — copies the address to the
 * clipboard so the page never dead-ends on a device with no mail client.
 * The label swaps to a confirmation for ~2s and announces via aria-live.
 */
export const CopyEmail = ({ email, className = '' }: CopyEmailProps) => {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const legacyCopy = () => {
    // Fallback for browsers without the async clipboard API.
    const ta = document.createElement('textarea')
    ta.value = email
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
    } catch {
      /* nothing more we can do; the address is shown in full below */
    }
    document.body.removeChild(ta)
  }

  const copy = () => {
    // Attempt the copy, but don't gate the confirmation on the clipboard
    // promise — if it stalls on a permission decision the feedback would never
    // show. The address is visible in full below as the ultimate fallback.
    try {
      const p = navigator.clipboard?.writeText(email)
      if (p) p.catch(legacyCopy)
      else legacyCopy()
    } catch {
      legacyCopy()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`btn-ghost inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`.trim()}
    >
      {copied ? (
        <Check size={16} aria-hidden />
      ) : (
        <Copy size={16} aria-hidden />
      )}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}
