import React from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

function getFocusable(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute('disabled'))
}

function Modal({ open, onClose, children, labelledBy = 'modal-title' }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  const panelRef = React.useRef(null)

  React.useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusables = getFocusable(panel)
    const first = focusables[0]
    first?.focus()

    function onTab(e) {
      if (e.key !== 'Tab') return
      const f = getFocusable(panel)
      if (f.length === 0) return
      const firstEl = f[0]
      const lastEl = f[f.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }

    panel?.addEventListener('keydown', onTab)
    return () => panel?.removeEventListener('keydown', onTab)
  }, [open])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            className="mx-4 w-full max-w-3xl rounded-xl border border-white/10 bg-ink p-4 text-slate-200 shadow-glow"
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
          >
            <div className="flex justify-start">
              <button
                type="button"
                className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-primary-500 hover:text-primary-400"
                onClick={onClose}
                aria-label="Close modal"
              >
                Esc
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Modal


