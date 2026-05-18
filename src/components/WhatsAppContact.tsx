import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppContact() {
  const whatsAppLink = "https://wa.me/5548999299977"

  return (
    <a href={whatsAppLink} target="_blank" className="
      fixed bottom-4 right-4 z-10 w-[50px] h-[50px] p-[6px] flex-center rounded-full
      bg-[#0CC142]
    ">
      <IconBrandWhatsapp
        color="white"
        className="w-full h-full"
      />
    </a >
  )
}