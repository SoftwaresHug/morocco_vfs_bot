// Auto-generated configuration for VFS Global Morocco AutoBot

export const config = {
  botName: "VFS Global Morocco",
  country: "Morocco",
  provider: "VFS Global",
  destination: "Schengen",
  loginUrl: "https://visa.vfsglobal.com/mar/en/login",
  centers: [
  "Rabat",
  "Casablanca",
  "Marrakech",
  "Tangier"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Student",
  "Medical",
  "Work",
  "Transit"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
