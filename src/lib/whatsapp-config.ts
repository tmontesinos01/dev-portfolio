// WhatsApp configuration module
// Centralizes phone number and default message used across the app

export const WHATSAPP_PHONE_NUMBER = "541155756348";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Tomas, vi tu portfolio y me gustaría contactarte para hablar sobre un proyecto. ¿Podríamos conversar?";

export function getWhatsAppUrl(): string {
  const encodedMessage = encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
}
