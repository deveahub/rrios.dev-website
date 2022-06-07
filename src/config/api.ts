const SELF_HOST = process.env.NEXT_PUBLIC_HOST;

export const API_ENDPOINT = `${SELF_HOST}/api`;

export const API_ENDPOINTS = {
  api: API_ENDPOINT,
  redtube: `${API_ENDPOINT}/redtube`,
  redtubeV2: `${API_ENDPOINT}/redtube-v2`,
  eporner: process.env.NEXT_PUBLIC_EPORNER_API_URL,
} as const;
