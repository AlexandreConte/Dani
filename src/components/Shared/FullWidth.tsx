interface FullWidthProps {
  className?: string
  children?: any
}

export default function FullWidth({ className, children }: FullWidthProps) {
  return (
    <div className={`min-w-screen ${className ?? ''}`}>
      {children ?? null}
    </div>
  )
}