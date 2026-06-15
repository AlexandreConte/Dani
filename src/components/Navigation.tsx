import { IconDental, IconHome } from "@tabler/icons-react";

interface NavigationProps {
  to: "HOME" | "TREATMENT";
}

export default function Navigation(props: NavigationProps) {
  return (
    <div className="flex-center hover:scale-105 focus:scale-105 transition-all fixed bottom-20 right-4 w-[50px] h-[50px] bg-white rounded-full z-50">
      {props.to === "TREATMENT" ? (
        <a href="/tratamentos">
          <IconDental size={35} stroke={1.5} color="#000" />
        </a>
      ) : (
        <a href="/">
          <IconHome size={35} stroke={1.5} color="#000" />
        </a>
      )}
    </div>
  );
}
