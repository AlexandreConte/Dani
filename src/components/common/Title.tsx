interface TitleProps {
  children: string
  className?: string
}

export default function Title(props: TitleProps) {
  return (
    <h1 className={`
      ${props.className ?? 'text-xl'}
    `}
    >
      {props.children}
    </h1>
  )
}