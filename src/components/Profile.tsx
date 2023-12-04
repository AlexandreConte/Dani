// COMPONENTS
export type ProfileProps = {
    children: any
}

export default function Profile({ children }: ProfileProps) {
    return (
        <div
            id="sobre"
            className="
                flex flex-col items-center gap-4 md:flex-row justify-center
            ">
            {children}
        </div>
    )
}