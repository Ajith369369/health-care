console.log(`🔄 Loading file: ${__filename}`);

import express, { Application, NextFunction, Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import connectDB from "./frameworks/database/mongodb/connection";
import expressConfig from "./frameworks/webserver/expressConfig";
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorhandler.middleware";
import routes from "./frameworks/webserver/routes";
import startServer from "./frameworks/webserver/server";
import socketConfig from "./frameworks/webserver/webSocket/socket";
import CustomError from "./utils/customError";

const app: Application = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

socketConfig(io);
expressConfig(app);
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
