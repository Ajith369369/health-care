export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;
export const GOOGLE_CLIENT_ID: string = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const USER_API: string = `${BACKEND_URL}/user`;
export const DOCTOR_API: string = `${BACKEND_URL}/doctor`;
export const ADMIN_API: string = `${BACKEND_URL}/admin`;
export const TOKEN_API: string = `${BACKEND_URL}/token`;
export const CHAT_API: string = `${BACKEND_URL}/chat`;
export const CLOUDINARY_UPLOAD_API: string = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_API;
export const CLOUDINARY_UPLOAD_PRESET: string = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET;
export const ZEGO_SERVER_SECRET: string = import.meta.env
  .VITE_ZEGO_SERVER_SECRET;
export const APP_ID: number = Number(import.meta.env.VITE_APP_ID);
export const STRIPE_PUBLIC_KEY: string = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
export const NAME_REGEX = /^[A-Z][a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const DESCRIPTION_REGEX = /^[A-Z][A-Za-z\s,.-]*$/;
export const PHONE_REGEX = /^\d{10}$/;
export const TIME_REGEX = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM|am|pm)$/;
export const NAVBAR_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact-us", label: "COntact Us" },
];
