'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { navLinks } from '@/data/site'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  pathname?: string
}

export function MobileMenu({ open, onClose, pathname = '/' }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open || !mounted) return null

  return createPortal(
    <div className="mobile-menu-backdrop lg:hidden">
      <button type="button" className="mobile-menu-overlay" aria-label="Close menu" onClick={onClose} />
      <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-11 min-w-11 items-center justify-center text-white"
            aria-label="Close menu"
          >
            <span className="text-2xl leading-none" aria-hidden>
              ×
            </span>
          </button>
        </div>
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            const current = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={current ? 'page' : undefined}
                  className={`block border-b border-white/10 py-3.5 font-poppins text-sm uppercase tracking-[0.16em] ${
                    current ? 'text-brand-gold' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
