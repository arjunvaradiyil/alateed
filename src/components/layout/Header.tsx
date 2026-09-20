'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { LuArrowUpRight } from 'react-icons/lu'

import { Logo } from '@/components/layout/Logo'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { navLinks } from '@/data/site'

export function Header() {
  const pathname = usePathname() ?? '/'
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`site-header ${isHome ? 'site-header--home' : 'site-header--page'} ${
        scrolled ? 'site-header--solid' : ''
      }`}
    >
      <div className="site-header__bar">
        <div className="site-header__row">
          <Logo gradientId="ateed-n-header" className="justify-self-start" />

          <nav className="hidden justify-center lg:flex" aria-label="Main">
            <ul className="site-header__nav flex items-center gap-6 xl:gap-9">
              {navLinks.map((link) => {
                const current =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <li key={link.href}>
                    <Link href={link.href} aria-current={current ? 'page' : undefined}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-self-end">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center text-white lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
                <path d="M0 1h22v2H0V1Zm0 6h22v2H0V7Zm0 6h22v2H0v-2Z" fill="currentColor" />
              </svg>
            </button>
            <Link href="/contact" className="header-cta">
              Contact
              <span className="header-cta__arrow" aria-hidden>
                <LuArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  )
}
