import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Download, FileText } from 'lucide-react'
import { RESUME } from '../data'

interface DownloadCVProps {
  className?: string
  /** 'top' opens the menu upward (use when the trigger sits low in its section). */
  menuPlacement?: 'top' | 'bottom'
}

const ITEMS = [RESUME.full, RESUME.short]

/**
 * "Download CV" trigger with a Full / Short résumé menu. The panel is a plain
 * absolutely-positioned menu kept inside its own section's box (never overflowing
 * into a later sibling), so it isn't hidden by stacking order or clipped. Closes
 * on outside click, Escape (returning focus to the trigger), or selection.
 */
export const DownloadCV = ({
  className = '',
  menuPlacement = 'bottom',
}: DownloadCVProps) => {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const firstItemRef = useRef<HTMLAnchorElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    firstItemRef.current?.focus()
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={wrapRef} className={`relative ${className}`.trim()}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-widest px-8 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base"
      >
        <Download size={16} aria-hidden />
        <span>Download CV</span>
        <ChevronDown
          size={15}
          aria-hidden
          className={`transition-transform duration-200 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Choose a résumé to download"
          className={`absolute right-0 z-40 w-64 overflow-hidden rounded-2xl border border-[#d7e2ea]/15 bg-[#161616] p-1.5 shadow-2xl shadow-black/70 ${
            menuPlacement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
        >
          {ITEMS.map((item, i) => (
            <a
              key={item.filename}
              ref={i === 0 ? firstItemRef : undefined}
              role="menuitem"
              href={item.url}
              download={item.filename}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left normal-case tracking-normal transition-colors hover:bg-[#d7e2ea]/10 focus-visible:bg-[#d7e2ea]/10 focus-visible:outline-none"
            >
              <FileText
                size={18}
                className="shrink-0 text-[#d7e2ea]"
                aria-hidden
              />
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-[#d7e2ea]">
                  {item.label}
                </span>
                <span className="text-xs text-[#d7e2ea]/60">{item.meta}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
