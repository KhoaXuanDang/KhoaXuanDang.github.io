interface ArrowProps {
  className?: string
  /** direction the arrow curves/points */
  variant?: 'down-right' | 'down-left' | 'right'
}

/** Hand-drawn style curved arrow doodles used for the hero annotations. */
export const DoodleArrow = ({ className, variant = 'down-right' }: ArrowProps) => {
  const paths: Record<NonNullable<ArrowProps['variant']>, { line: string; head: string }> = {
    'down-right': {
      line: 'M6 8 C 34 2, 58 16, 62 48',
      head: 'M62 48 L50 44 M62 48 L65 35',
    },
    'down-left': {
      line: 'M64 8 C 36 2, 12 16, 8 48',
      head: 'M8 48 L20 44 M8 48 L5 35',
    },
    right: {
      line: 'M4 30 C 24 12, 46 12, 66 26',
      head: 'M66 26 L54 24 M66 26 L58 36',
    },
  }
  const p = paths[variant]
  return (
    <svg
      className={className}
      width="70"
      height="56"
      viewBox="0 0 70 56"
      fill="none"
      aria-hidden="true"
    >
      <path d={p.line} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d={p.head} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface SparkleProps {
  className?: string
  size?: number
}

/** Four-point sparkle doodle. */
export const DoodleSparkle = ({ className, size = 26 }: SparkleProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2 C 12.6 7.5 16.5 11.4 22 12 C 16.5 12.6 12.6 16.5 12 22 C 11.4 16.5 7.5 12.6 2 12 C 7.5 11.4 11.4 7.5 12 2 Z"
      fill="currentColor"
    />
  </svg>
)
