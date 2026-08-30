/**
 * Centralized contact configuration module.
 * Reads the WhatsApp contact number strictly from the environment configuration.
 */

const rawContactNumber = import.meta.env.VITE_CONTACT_NUMBER;

if (!rawContactNumber && import.meta.env.DEV) {
  console.warn(
    '[Swastik Config Warning]: VITE_CONTACT_NUMBER is not set in your environment file (.env). Please check .env.example.'
  );
}

export const CONTACT_NUMBER: string = rawContactNumber || '';

export const getWhatsAppUrl = (message?: string): string => {
  if (!CONTACT_NUMBER) {
    console.error('[Swastik Config Error]: Cannot open WhatsApp. CONTACT_NUMBER is not configured.');
    return '#';
  }

  if (message) {
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${CONTACT_NUMBER}`;
};
