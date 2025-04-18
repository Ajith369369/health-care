console.log(`🔄 Loading file: ${__filename}`);

import express from "express";
import bookingController from "../../../adapters/bookingController";
import doctorController from "../../../adapters/doctorController";
import { bookingDbRepository } from "../../../app/interfaces/bookingDbRepository";
import { departmentDbRepository } from "../../../app/interfaces/departmentDbRepository";
import { doctorDbRepository } from "../../../app/interfaces/doctorDBRepository";
import { prescriptionDbRepository } from "../../../app/interfaces/prescriptionDbRepository";
import { timeSlotDbRepository } from "../../../app/interfaces/timeSlotDbRepository";
import { userDbRepository } from "../../../app/interfaces/userDbRepository";
import { authServiceInterface } from "../../../app/service-interface/authServiceInterface";
import { bookingRepositoryMongodb } from "../../database/mongodb/repositories/BookingRepositoryMongodb";
import { departmentRepositoryMongodb } from "../../database/mongodb/repositories/departmentRepositoryMongodb";
import { doctorRepositoryMongodb } from "../../database/mongodb/repositories/doctorRepositoryMongodb";
import { prescriptionRepositoryMongodb } from "../../database/mongodb/repositories/prescriptionRepositoryMongodb";
import { timeSlotRepositoryMongodb } from "../../database/mongodb/repositories/timeSlotRepositotyMongodb";
import { userRepositoryMongodb } from "../../database/mongodb/repositories/userRepositoryMongodb";
import { authService } from "../../services/authService";
import { authenticateDoctor } from "../middlewares/authMiddleware";

const doctorRoute = () => {

  const router = express.Router();

  //doctor controller
  const controller = doctorController(
    authServiceInterface,
    authService,
    userDbRepository,
    userRepositoryMongodb,
    doctorDbRepository,
    doctorRepositoryMongodb,
    timeSlotDbRepository,
    timeSlotRepositoryMongodb,
    prescriptionDbRepository,
    prescriptionRepositoryMongodb,
    bookingDbRepository,
    bookingRepositoryMongodb,
    departmentDbRepository,
    departmentRepositoryMongodb
  );

  const _bookingController = bookingController(
    userDbRepository,
    userRepositoryMongodb,
    doctorDbRepository,
    doctorRepositoryMongodb,
    timeSlotDbRepository,
    timeSlotRepositoryMongodb,
    bookingDbRepository,
    bookingRepositoryMongodb
  );

  router.post("/signup", controller.signup);
  router.post("/verify-token/:token", controller.verifyToken);
  router.post("/google-sign-in", controller.googleSignIn);
  router.post("/login", controller.login);

  router.get("/profile", authenticateDoctor, controller.doctorProfile);
  router.patch(
    "/profile/edit",
    authenticateDoctor,
    controller.updateDoctorInfo
  );
  router.get("/status", authenticateDoctor, controller.doctorStatus);
  // router.post("/schedule",authenticateDoctor,controller.scheduleTime);
  // router.get("/time-slots/:date",authenticateDoctor,controller.getTimeSlots);

  router.post("/add-slot", authenticateDoctor, controller.addSlot);
  router.post("/get-time-slots", authenticateDoctor, controller.getTimeSlots);
  router.delete("/delete-slot/:id", authenticateDoctor, controller.deleteSlot);
  // router.delete("/deleteTime/:id",authenticateDoctor,controller.removeTimeSlot);
  router.get("/user/:id", authenticateDoctor, controller.userDetails);
  router.get("/patients", authenticateDoctor, controller.getPatientList);
  router.get("/patients/:id", authenticateDoctor, controller.getPatientDetails);
  router.get(
    "/doctor-details/:id",
    authenticateDoctor,
    controller.getDoctorDetails
  );
  router.put(
    "/reapply-verification/:id",
    authenticateDoctor,
    controller.getDoctorRejected
  );
  router.post(
    "/add-prescription",
    authenticateDoctor,
    controller.addPrescription
  );
  router.get(
    "/prescription/:id",
    authenticateDoctor,
    controller.fetchPrescription
  );
  router.delete(
    "/prescription/:id",
    authenticateDoctor,
    controller.deletePrescription
  );
  router.get("/departments", controller.getAllDepartments);
  /*Booking Routes for booking Controller */

  router.get(
    "/booking-details/:id",
    authenticateDoctor,
    _bookingController.getAppointmentList
  );

  return router;
};

export default doctorRoute;
