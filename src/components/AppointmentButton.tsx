import { IconBrandWhatsapp } from "@tabler/icons-react"

interface ButtonProps {
    link: string
    children: any
    className?: string
}

export default function Button(props: ButtonProps) {
    return (
        <a href={props.link} className={`
      bg-neutral-300 rounded-lg p-3 hover:bg-[#b1ccb3] focus:bg-[#a1caa3] hover:translate-y-2 transition-all duration-300
      ${props.className ?? ""}
      `}>
            <span className="flex gap-1"><IconBrandWhatsapp /> {props.children}</span>
        </a>
    )
}