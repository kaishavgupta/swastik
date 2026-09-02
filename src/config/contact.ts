/**
 * Centralized contact configuration module.
 * Reads the WhatsApp/phone contact number strictly from the environment configuration.
 *
 * VITE_CONTACT_NUMBER should be set as the full international number without '+',
 * e.g. 918076439354 for +91 8076439354.
 */

const rawContactNumber = import.meta.env.VITE_CONTACT_NUMBER as string | undefined;

if (!rawContactNumber && import.meta.env.DEV) {
  console.warn(
    '[Swastik Config Warning]: VITE_CONTACT_NUMBER is not set in your environment file (.env). Please check .env.example.'
  );
}

/** Full international number without '+', e.g. "918076439354" */
export const CONTACT_NUMBER: string = rawContactNumber || '';

/**
 * Human-readable display string derived from CONTACT_NUMBER.
 * Assumes Indian numbers in format 91XXXXXXXXXX → "+91 XXXXXXXXXX".
 */
export const CONTACT_NUMBER_DISPLAY: string = CONTACT_NUMBER
  ? CONTACT_NUMBER.startsWith('91') && CONTACT_NUMBER.length === 12
    ? `+91 ${CONTACT_NUMBER.slice(2)}`
    : `+${CONTACT_NUMBER}`
  : '';

/** tel: href for use in anchor tags */
export const getTelUrl = (): string =>
  CONTACT_NUMBER ? `tel:+${CONTACT_NUMBER}` : '#';

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
