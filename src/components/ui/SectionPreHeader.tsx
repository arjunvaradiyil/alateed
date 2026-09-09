import { DiamondIcon } from '@/components/ui/DiamondIcon'

export function SectionPreHeader({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`mb-3 inline-flex items-center gap-2.5 font-helvetica-neue text-sm font-normal uppercase tracking-[1px] sm:text-base md:mb-5 ${
        light ? 'text-brand-light' : 'text-brand-blue'
      }`}
    >
      <DiamondIcon size={12} className="shrink-0" />
      <span>{children}</span>
      <span
        className={`hidden h-px w-10 sm:block ${light ? 'bg-brand-light/50' : 'bg-brand-blue/35'}`}
        aria-hidden
      />
    </p>
  )
}
