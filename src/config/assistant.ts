export interface BusinessAssistantConfig {
  assistantName: string;
  businessName: string;
  description: string;
  services: string[];
  address?: string;
  openingHours?: string;
  contactInstructions: string;
}

export const assistantConfig: BusinessAssistantConfig = {
  assistantName: "Assistente Anima",
  businessName: "Anima Odontologia",
  description: "Clínica odontológica localizada no Campeche, Florianópolis/SC.",
  // Preencha apenas com serviços realmente oferecidos.
  services: ["Implantes de Zircônia", "Implantes de Titânio", "Facetas e Lentes de Contato Dental", "Toxina Botulínica", "Próteses", "Clareamente Dental", "Profilaxia"],
  address:
    "Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208, Campeche, Florianópolis, Santa Catarina, CEP 88065-000",
  openingHours: undefined,
  contactInstructions: "Oriente o visitante a utilizar o botão de WhatsApp para conversar diretamente com a clínica.",
};
