interface PageProps {
  children: any
}

export default function Page({ children }: PageProps) {
  return (
    <div className="w-screen mx-auto min-h-screen">
      {children}
    </div>
  )
}