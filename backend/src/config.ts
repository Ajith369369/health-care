import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

export const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY;

export const configKeys = {
  PORT: process.env.PORT || (8000 as number),
  CLIENT_PORT: process.env.CLIENT_PORT,
  MONGO_URL: process.env.MONGO_URL as string,
  APP_EMAIL: process.env.APP_EMAIL as string,
  APP_PASSWORD: process.env.APP_PASSWORD as string,
  ACCESS_SECRET: process.env.ACCESS_SECRET as string,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
};

