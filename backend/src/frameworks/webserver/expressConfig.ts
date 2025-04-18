import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import { configKeys } from "../../config";

const expressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  const corsConfig = {
    origin: configKeys.FRONTEND_URL,
    credentials: true,
  };

  app.use(cors(corsConfig));
  app.options(/(.*)/, cors(corsConfig));
  app.use(cookieParser());
};

export default expressConfig;
