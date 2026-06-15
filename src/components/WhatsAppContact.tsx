import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppContact() {
  const whatsAppLink = "https://wa.me/5548999299977";

  return (
    <div
      className="fixed bottom-4 right-4 z-10 w-[50px] h-[50px] p-[6px]
        flex-center rounded-full
        hover:scale-105 focus:scale-105 transition-all
        bg-[#0CC142]
      "
    >
      <a href={whatsAppLink} target="_blank" className="">
        <IconBrandWhatsapp size={35} color="white" />
      </a>
    </div>
  );
}
