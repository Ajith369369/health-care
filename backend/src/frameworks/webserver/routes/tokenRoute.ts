console.log(`🔄 Loading file: ${__filename}`);

import express from "express";
import tokenContoller from "../../../adapters/tokenController";
import { doctorDbRepository } from "../../../app/interfaces/doctorDBRepository";
import { userDbRepository } from "../../../app/interfaces/userDbRepository";
import { authServiceInterface } from "../../../app/service-interface/authServiceInterface";
import { doctorRepositoryMongodb } from "../../database/mongodb/repositories/doctorRepositoryMongodb";
import { userRepositoryMongodb } from "../../database/mongodb/repositories/userRepositoryMongodb";
import { authService } from "../../services/authService";

const refreshTokenRoute = () => {
  const router = express.Router();
  const controller = tokenContoller(
    authServiceInterface,
    authService,
    userDbRepository,
    userRepositoryMongodb,
    doctorDbRepository,
    doctorRepositoryMongodb
  );

  router.get("/accessToken", controller.returnAccessToClient);

  return router;
};
export default refreshTokenRoute;
