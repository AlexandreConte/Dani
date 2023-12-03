export interface AreaProps {
    children: any
    className?: string
}

export default function Area({ children, className }: AreaProps) {
    return (
        <div className={`px-7 xl:px-0 w-full xl:w-[1200px] ${className ?? ''}`}>
            {children}
        </div>
    )
}