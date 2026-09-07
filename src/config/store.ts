import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر نادر الأفق لزينة وإكسسوارات السيارات",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Nader Al-Ufuq Auto Accessories",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "مؤسسة نادر الافق",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "Nader Alufuq Establishment",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "إكسسوارات، إنارة، ديكورات وتجهيزات السيارات الفاخرة",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "Automotive Accessories, Lighting & Premium Car Styling",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7055053289",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310550532890003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "JHEA2563",
  city: import.meta.env.VITE_CITY || "جدة",
  district: import.meta.env.VITE_DISTRICT || "حي الشرقية",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - جدة - حي الشرقية - الرمز البريدي JHEA2563",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0534210716",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966534210716",
  email: import.meta.env.VITE_CONTACT_EMAIL || "nadralafq@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
