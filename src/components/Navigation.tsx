import { IconDental, IconHome } from "@tabler/icons-react";

interface NavigationProps {
  to: "HOME" | "TREATMENT";
}

export default function Navigation(props: NavigationProps) {
  const className = `border border-zinc-300
      flex-center hover:scale-105 focus:scale-105 transition-all fixed bottom-20 right-4 w-[50px] h-[50px]
      bg-white rounded-full z-50`;

  return props.to === "TREATMENT" ? (
    <a href="/tratamentos" className={className}>
      <IconDental size={35} stroke={1.5} color="#000" />
    </a>
  ) : (
    <a href="/" className={className}>
      <IconHome size={35} stroke={1.5} color="#000" />
    </a>
  );
}
