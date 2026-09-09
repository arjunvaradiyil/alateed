import Link from 'next/link'

import { company } from '@/data/site'

export function Logo({
  className = '',
  compact = false,
  gradientId = 'ateed-n',
}: {
  className?: string
  compact?: boolean
  gradientId?: string
}) {
  const size = compact ? 36 : 44

  return (
    <Link
      href="/"
      className={`flex min-w-0 max-w-full items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={`${company.shortName} home`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
      >
        <defs>
          <linearGradient id={gradientId} x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0c2d5c" />
            <stop offset="0.45" stopColor="#1a4a86" />
            <stop offset="1" stopColor="#c9a24a" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="10" fill={`url(#${gradientId})`} />
        <path d="M13 36V12h7.2l7.6 14.8V12H35v24h-7.2l-7.6-14.8V36H13Z" fill="white" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-bebas-neue truncate text-[18px] tracking-[0.08em] text-white xs:text-[20px] sm:text-[26px]">
          NOOR AL ATEED
        </span>
        <span className="font-poppins mt-0.5 truncate text-[8px] font-medium uppercase tracking-[0.16em] text-white/75 xs:text-[9px] xs:tracking-[0.22em] sm:mt-1 sm:text-[10px] sm:tracking-[0.28em]">
          Technical Services
        </span>
      </span>
    </Link>
  )
}
