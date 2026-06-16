import NavigateUp from "./NavigateUp";
import Navigation from "./Navigation";
import WhatsAppContact from "./WhatsAppContact";

interface FixedMenuProps {
  isTreatmentPage?: boolean;
}

export default function FixedMenu(props: FixedMenuProps) {
  return props.isTreatmentPage ? (
    <>
      <WhatsAppContact />
      <Navigation to="HOME" />
      <NavigateUp />
    </>
  ) : (
    <>
      <WhatsAppContact />
      <Navigation to="TREATMENT" />
      <NavigateUp />
    </>
  );
}
