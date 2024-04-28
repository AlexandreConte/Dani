export interface AreaProps {
  children?: any
  className?: string
}

export default function Area({ children, className }: AreaProps) {
  return (
    <div className={`w-full xl:w-[1200px] ${className ?? ''}`}>
      {children ?? null}
    </div>
  )
}