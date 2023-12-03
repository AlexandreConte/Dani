interface PageProps {
    children: any
}

export default function Page({ children }: PageProps) {
    return (
        <div>
            {children}
        </div>
    )
}