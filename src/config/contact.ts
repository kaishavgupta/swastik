import { useState, useEffect } from 'react';

/**
 * Centralized contact configuration module.
 * Dynamically fetches phone number, email, and social media URLs from the server endpoint /api/contact-info
 * with fallback to environment variables.
 */

const defaultNumber = (import.meta.env.VITE_CONTACT_NUMBER as string | undefined) || '919219616304';
const defaultEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'sales@swastikmixtures.com';
const defaultFacebook = (import.meta.env.VITE_FACEBOOK_URL as string | undefined) || 'https://www.facebook.com/share/19W93nerbE/';
const defaultLinkedin = (import.meta.env.VITE_LINKEDIN_URL as string | undefined) || 'https://www.linkedin.com/in/nikhil-mittal-01ab94426?utm_source=share_via&utm_content=profile&utm_medium=member_android';
const defaultInstagram = (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) || 'https://www.instagram.com/swastikmixtures?igsi=NXB3emMyc2xiMzEw';
const defaultYoutube = (import.meta.env.VITE_YOUTUBE_URL as string | undefined) || 'https://youtube.com/@swastikmixtures?si=4EmJHFhEllvBXcl2';

export interface ContactState {
  phone: string;
  email: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  isLoaded: boolean;
}

let globalContactState: ContactState = {
  phone: defaultNumber,
  email: defaultEmail,
  facebook: defaultFacebook,
  linkedin: defaultLinkedin,
  instagram: defaultInstagram,
  youtube: defaultYoutube,
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
        if (data.phone || data.email || data.facebook) {
          globalContactState = {
            phone: data.phone || globalContactState.phone,
            email: data.email || globalContactState.email,
            facebook: data.facebook || globalContactState.facebook,
            linkedin: data.linkedin || globalContactState.linkedin,
            instagram: data.instagram || globalContactState.instagram,
            youtube: data.youtube || globalContactState.youtube,
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
export let FACEBOOK_URL: string = globalContactState.facebook;
export let LINKEDIN_URL: string = globalContactState.linkedin;
export let INSTAGRAM_URL: string = globalContactState.instagram;
export let YOUTUBE_URL: string = globalContactState.youtube;

listeners.add(() => {
  CONTACT_NUMBER = globalContactState.phone;
  CONTACT_EMAIL = globalContactState.email;
  CONTACT_NUMBER_DISPLAY = formatPhoneDisplay(globalContactState.phone);
  FACEBOOK_URL = globalContactState.facebook;
  LINKEDIN_URL = globalContactState.linkedin;
  INSTAGRAM_URL = globalContactState.instagram;
  YOUTUBE_URL = globalContactState.youtube;
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
    facebook: state.facebook,
    linkedin: state.linkedin,
    instagram: state.instagram,
    youtube: state.youtube,
    phoneDisplay: formatPhoneDisplay(state.phone),
    telUrl: getTelUrl(state.phone),
    mailtoUrl: (subject?: string, body?: string) => getMailtoUrl(subject, body, state.email),
    whatsappUrl: (message?: string) => getWhatsAppUrl(message, state.phone),
    isLoaded: state.isLoaded,
  };
};
