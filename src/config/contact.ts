import { useState, useEffect } from 'react';

/**
 * Centralized contact configuration module.
 * Dynamically fetches phone number and email from the server endpoint /api/contact-info
 * with fallback to environment variables.
 */

const defaultNumber = (import.meta.env.VITE_CONTACT_NUMBER as string | undefined) || '919219616304';
const defaultEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'sales@swastikmixtures.com';

export interface ContactState {
  phone: string;
  email: string;
  isLoaded: boolean;
}

let globalContactState: ContactState = {
  phone: defaultNumber,
  email: defaultEmail,
  isLoaded: false,
};

const listeners = new Set<() => void>();
let fetchPromise: Promise<void> | null = null;

export const fetchContactInfo = async (): Promise<ContactState> => {
  if (fetchPromise) {
    await fetchPromise;
    return globalContactState;
  }

  fetchPromise = (async () => {
    try {
      const response = await fetch('/api/contact-info');
      if (response.ok) {
        const data = await response.json();
        if (data.phone || data.email) {
          globalContactState = {
            phone: data.phone || globalContactState.phone,
            email: data.email || globalContactState.email,
            isLoaded: true,
          };
          listeners.forEach((listener) => listener());
        }
      }
    } catch (err) {
      console.warn('[Swastik Config]: Server contact info fetch skipped/failed, using local fallback.', err);
    }
  })();

  await fetchPromise;
  return globalContactState;
};

// Helper utility functions
export const formatPhoneDisplay = (phone: string = globalContactState.phone): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) return '';
  if (cleanPhone.startsWith('91') && cleanPhone.length === 12) {
    return `+91 ${cleanPhone.slice(2)}`;
  }
  return `+${cleanPhone}`;
};

export const getTelUrl = (phone: string = globalContactState.phone): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return cleanPhone ? `tel:+${cleanPhone}` : '#';
};

export const getMailtoUrl = (
  subject?: string,
  body?: string,
  email: string = globalContactState.email
): string => {
  if (!email) return '#';
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${params.length ? `?${params.join('&')}` : ''}`;
};

export const getWhatsAppUrl = (
  message?: string,
  phone: string = globalContactState.phone
): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) {
    return '#';
  }
  if (message) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanPhone}`;
};

// Static export helpers for legacy or direct access
export let CONTACT_NUMBER: string = globalContactState.phone;
export let CONTACT_EMAIL: string = globalContactState.email;
export let CONTACT_NUMBER_DISPLAY: string = formatPhoneDisplay(globalContactState.phone);

listeners.add(() => {
  CONTACT_NUMBER = globalContactState.phone;
  CONTACT_EMAIL = globalContactState.email;
  CONTACT_NUMBER_DISPLAY = formatPhoneDisplay(globalContactState.phone);
});

/**
 * Custom React hook that subscribes to contact info fetched from the server.
 * Automatically calls /api/contact-info when mounted.
 */
export const useContactInfo = () => {
  const [state, setState] = useState<ContactState>(globalContactState);

  useEffect(() => {
    const handleUpdate = () => {
      setState({ ...globalContactState });
    };

    listeners.add(handleUpdate);
    fetchContactInfo();

    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    phone: state.phone,
    email: state.email,
    phoneDisplay: formatPhoneDisplay(state.phone),
    telUrl: getTelUrl(state.phone),
    mailtoUrl: (subject?: string, body?: string) => getMailtoUrl(subject, body, state.email),
    whatsappUrl: (message?: string) => getWhatsAppUrl(message, state.phone),
    isLoaded: state.isLoaded,
  };
};
