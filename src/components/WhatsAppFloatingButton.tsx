import { siteConfig } from "../data/siteConfig";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";

function WhatsAppFloatingButton() {
  return (
    <FloatingWhatsAppButton
      phoneNumber={siteConfig.whatsAppNumber}
      defaultMessage={siteConfig.defaultWhatsAppMessage}
      showTooltip
      tooltipText="Te respondo por WhatsApp"
    />
  );
}

export default WhatsAppFloatingButton;
