import Area from "./Area";

export interface AreaWithMarginXProps {
  children?: any
  className?: string
}

export default function AreaWithMarginX({ children, className }: AreaWithMarginXProps) {
  return (
    <Area
      className={`
        mx-2
        ${className}
      `}
    >
      {children ?? null}
    </Area>
  )
}