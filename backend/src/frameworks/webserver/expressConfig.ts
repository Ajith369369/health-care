import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import { configKeys } from "../../config";

const expressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  const allowedOrigins = [
    "http://localhost:5173", // Your Vite dev URL
    configKeys.FRONTEND_URL, // Your production frontend URL
  ];
  const corsConfig = {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
  };

  app.use(cors(corsConfig));
  app.options(/(.*)/, cors(corsConfig));
  app.use(cookieParser());
};

export default expressConfig;
