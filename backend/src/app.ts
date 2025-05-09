console.log(`🔄 Loading file: ${__filename}`);

import express, { Application, NextFunction, Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import { configKeys } from "./config";
import connectDB from "./frameworks/database/mongodb/connection";
import expressConfig from "./frameworks/webserver/expressConfig";
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorhandler.middleware";
import routes from "./frameworks/webserver/routes";
import startServer from "./frameworks/webserver/server";
import socketConfig from "./frameworks/webserver/webSocket/socket";
import CustomError from "./utils/customError";

const app: Application = express();

// 🔍 Log all the incoming request headers.
/* app.use((req, res, next) => {
  console.log("📥 Incoming Request Headers:", req.headers);
  next();
}); */

// 🔍 Log all the outgoing response headers.
/* app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    console.log("📤 Outgoing Response Headers:", res.getHeaders());
    return originalSend.call(this, body);
  };
  next();
}); */

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: configKeys.FRONTEND_URL,
    // origin: "*", // 🚨 For local development only!
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// app.use(express.static(path.join(__dirname, "../../frontend/dist")));

socketConfig(io);
expressConfig(app);

// 🔧 CORS headers middleware

/* app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");

  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  // Optional if using COOP/COEP
  next();
}); */

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", configKeys.FRONTEND_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // Only respond to OPTIONS preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next(); // ✅ Allow actual requests to proceed
}); */

connectDB();
routes(app);

// ✅ 404 Not Found Handler - use this AFTER routes
app.all(/(.*)/, (req, res, next: NextFunction) => {
  next(new CustomError(`Not found : ${req.url}`, 404));
});

// ✅ Global Error Handler - use this AFTER 404
app.use(errorHandlingMiddleware);

// ✅ Add this at the END (after all routes and middlewares)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ ERROR:", err.stack); // logs full stack trace
  console.error(`🔍 Error handler registered in file: ${__filename}`);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Catch-all frontend routing (must be after error handling if you don’t want it to interfere)
app.get(/(.*)/, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

// ✅ Start server
startServer(httpServer);
