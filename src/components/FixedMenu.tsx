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
    </>
  ) : (
    <>
      <WhatsAppContact />
      <Navigation to="TREATMENT" />
    </>
  );
}
