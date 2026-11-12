import { IconDental, IconHome } from "@tabler/icons-react";
import Link from "next/link";

interface NavigationProps {
  to: "HOME" | "TREATMENT";
}

export default function Navigation(props: NavigationProps) {
  const className = `border border-zinc-300
      flex-center hover:scale-105 focus:scale-105 transition-all fixed bottom-20 right-4 w-[50px] h-[50px]
      bg-white rounded-full z-50 shadow-md`;

  return props.to === "TREATMENT" ? (
    <Link href="/tratamentos" className={className}>
      <IconDental size={35} stroke={1.5} color="#000" />
    </Link>
  ) : (
    <Link href="/" className={className}>
      <IconHome size={35} stroke={1.5} color="#000" />
    </Link>
  );
}
