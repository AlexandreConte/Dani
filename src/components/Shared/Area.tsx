export interface AreaProps {
  children?: any
  className?: string
}

export default function Area({ children, className }: AreaProps) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto flex justify-center ${className ?? ''}`}>
      {children ?? null}
    </div>
  )
}