interface PageProps {
  children: any;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={`w-full min-h-screen ${className}`}>{children}</div>
  );
}
