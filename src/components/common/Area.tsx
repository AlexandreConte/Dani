export interface AreaProps {
  children?: any
  className?: string
}

export default function Area({ children, className }: AreaProps) {
  return (
    <div className={`w-full max-w-[90%] mx-auto ${className ?? ''}`}>
      {children ?? null}
    </div>
  )
}