interface PageProps {
    children: any
}

export default function Page({ children }: PageProps) {
    return (
        <div className="w-full mx-auto">
            {children}
        </div>
    )
}