import { Router } from "express";
import adminController from "../../../adapters/adminController";
import { departmentDbRepository } from "../../../app/interfaces/departmentDbRepository";
import { doctorDbRepository } from "../../../app/interfaces/doctorDBRepository";
import { userDbRepository } from "../../../app/interfaces/userDbRepository";
import { authServiceInterface } from "../../../app/service-interface/authServiceInterface";
import { departmentRepositoryMongodb } from "../../database/mongodb/repositories/departmentRepositoryMongodb";
import { doctorRepositoryMongodb } from "../../database/mongodb/repositories/doctorRepositoryMongodb";
import { userRepositoryMongodb } from "../../database/mongodb/repositories/userRepositoryMongodb";
import { authService } from "../../services/authService";
import { authenticateAdmin } from "../middlewares/authMiddleware";

export default () => {
  const router = Router();

  const controller = adminController(
    authServiceInterface,
    authService,
    userDbRepository,
    userRepositoryMongodb,
    doctorDbRepository,
    doctorRepositoryMongodb,
    departmentDbRepository,
    departmentRepositoryMongodb
  );

  router.post("/login", controller.adminLogin);
  router.get("/users", authenticateAdmin, controller.getAllUser);
  router.get("/doctors", authenticateAdmin, controller.getAllTheDoctors);
  router.get("/appointments", authenticateAdmin, controller.getAllAppointments);
  router.patch("/block_user/:id", authenticateAdmin, controller.userBlock);
  router.patch("/block_doctor/:id", authenticateAdmin, controller.doctorBlock);
  router.get("/doctors/:id", authenticateAdmin, controller.doctorDetails);
  router.patch(
    "/verify_doctor/:id",
    authenticateAdmin,
    controller.VerifyDoctor
  );
  router.patch(
    "/verify_doctor_rejection/:id",
    authenticateAdmin,
    controller.rejectionDoctor
  );
  router.post("/addDepartment", authenticateAdmin, controller.addDepartment);
  router.get("/departments", authenticateAdmin, controller.getAllDepartments);
  router.put(
    "/departments/:id",
    authenticateAdmin,
    controller.updateDepartment
  );
  router.patch(
    "/unlist_department/:id",
    authenticateAdmin,
    controller.unlistDepartment
  );

  return router;
};
