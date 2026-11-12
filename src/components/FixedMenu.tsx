import { useRouter } from "next/router";
import BusinessAssistantChat from "./BusinessAssistantChat";
import NavigateUp from "./NavigateUp";
import Navigation from "./Navigation";
import WhatsAppContact from "./WhatsAppContact";

interface FixedMenuProps {
  isTreatmentPage?: boolean;
}

export default function FixedMenu() {
  const router = useRouter();

  return router.asPath.includes("/tratamentos") ? (
    <>
      <WhatsAppContact />
      <Navigation to="HOME" />
      <NavigateUp />
      <BusinessAssistantChat
        assistantName="Assistente Virtual"
        businessName="Anima Odontologia"
        contactUrl="https://wa.me/5548999299977" />
    </>
  ) : (
    <>
      <WhatsAppContact />
      <Navigation to="TREATMENT" />
      <NavigateUp />
      <BusinessAssistantChat
        assistantName="Assistente Virtual"
        businessName="Anima Odontologia"
        contactUrl="https://wa.me/5548999299977" />
    </>
  );
}
