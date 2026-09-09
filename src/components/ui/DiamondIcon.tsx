export function DiamondIcon({
  className = '',
  size = 10,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4.2.6h3.6L11.4 4.2v3.6L7.8 11.4H4.2L.6 7.8V4.2L4.2.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const OctagonIcon = DiamondIcon
