export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`site-container ${className}`.trim()}>{children}</div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: React.ReactNode
  title: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
      <div className="min-w-0 max-w-2xl">
        {eyebrow}
        {title}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
