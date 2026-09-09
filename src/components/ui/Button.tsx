import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

type ButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'solid' | 'hero'
}

export function Button({ href, children, className = '', variant = 'solid' }: ButtonProps) {
  if (variant === 'hero') {
    return (
      <Link
        href={href}
        className={`hero-cta h-12 w-full max-w-[240px] px-6 sm:h-[52px] sm:w-auto sm:max-w-none sm:px-8 ${className}`.trim()}
      >
        {children}
        <span className="hero-cta__arrow" aria-hidden>
          <LuArrowUpRight size={18} />
        </span>
      </Link>
    )
  }

  return (
      <div className={`btn-red-wrap inline-flex w-full max-w-[240px] sm:w-[218px] sm:max-w-none ${className}`.trim()}>
      <Link
        href={href}
        className="btn-red inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 px-6 text-xs font-medium uppercase tracking-wider sm:h-[66px] sm:min-h-[66px] sm:px-[33px]"
      >
        {children}
        <span className="btn-red__arrow" aria-hidden>
          <LuArrowUpRight size={18} />
        </span>
      </Link>
    </div>
  )
}
