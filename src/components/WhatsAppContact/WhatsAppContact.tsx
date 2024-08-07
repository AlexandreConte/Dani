import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function WhatsAppContact() {
  const whatsAppLink = "https://wa.me/5548999299977"
  
  return (
    <Link href={whatsAppLink} target="_blank" className="
      fixed bottom-2 left-2 z-10 w-10 h-10 p-1 bg-neutral-300 flex-center rounded-full
    ">
      <IconBrandWhatsapp
        width={24}
        color="black"
      />
    </Link >
  )
}