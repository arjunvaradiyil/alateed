import Link from 'next/link'

import { company } from '@/data/site'

const MARK_PATH =
  'M35.349 0L36.28.928L40.397 5.033L51.143 15.748L56.231 20.821L63.457 28.027L63.457 42.403L51.734 30.711L36.727 15.748L36.28 15.304L29.175 8.218L29.175 53.884L41.201 53.884L36.326 64.602L18.792 64.602L18.792.216C8.175 1.692 0 10.801 0 21.824L0 69.632L64.172 69.632L63.457 68.92L59.128 64.602L48.379 53.884L43.438 48.958L36.28 41.821L36.28 27.442L47.938 39.065L62.797 53.884L63.457 54.544L70.828 61.892L70.828 15.748L58.537 15.748L63.411 5.033L81.211 5.033L81.211 69.416C91.825 67.94 100 58.831 100 47.808L100 0Z'

const OUTER_PATH =
  'M18.792.216C8.175 1.692 0 10.801 0 21.824V69.632H81.211C91.825 67.94 100 58.831 100 47.808V0H18.792Z'

export function LogoMark({
  gradientId,
  className = '',
}: {
  gradientId: string
  className?: string
}) {
  const clipId = `${gradientId}-outer`

  return (
    <svg
      viewBox="0 0 100 69.632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`h-9 w-auto shrink-0 sm:h-11 ${className}`.trim()}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="6"
          y1="64"
          x2="94"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#303085" />
          <stop offset="0.45" stopColor="#4a9ad9" />
          <stop offset="1" stopColor="#26479c" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={OUTER_PATH} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100" height="69.632" fill="white" />
        <path fill={`url(#${gradientId})`} d={MARK_PATH} />
      </g>
    </svg>
  )
}

export function Logo({
  className = '',
  compact = false,
  gradientId = 'ateed-n',
}: {
  className?: string
  compact?: boolean
  gradientId?: string
}) {
  return (
    <Link
      href="/#home"
      className={`flex min-w-0 max-w-full items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={`${company.shortName} home`}
    >
      <LogoMark gradientId={gradientId} className={compact ? 'h-8 sm:h-9' : undefined} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          dir="rtl"
          lang="ar"
          className="font-arabic truncate text-[9px] font-semibold text-white/90 xs:text-[10px] sm:text-[11px]"
        >
          {company.arabicName}
        </span>
        <span className="mt-0.5 truncate font-serif text-[15px] font-bold tracking-tight text-white xs:text-[17px] sm:text-[20px]">
          Noor Al Ateed
        </span>
        <span className="font-poppins mt-0.5 truncate text-[8px] font-medium tracking-[0.04em] text-white/80 xs:text-[9px] sm:text-[10px]">
          Technical Services
        </span>
      </span>
    </Link>
  )
}
