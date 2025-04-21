console.log(`🔄 Loading file: ${__filename}`);

import express from "express";
import bookingController from "../../../adapters/bookingController";
import userController from "../../../adapters/userController";
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
import { timeSlotRepositoryMongodb } from "../../database/mongodb/repositories/timeSlotRepositoryMongodb";
import { userRepositoryMongodb } from "../../database/mongodb/repositories/userRepositoryMongodb";
import { authService } from "../../services/authService";
import { authenticateUser } from "../middlewares/authMiddleware";

const userRoutes = () => {
  const router = express.Router();

  /**
   * 📄 Documentation: ../../../../docs/userController.md
   */

  const controller: any = userController(
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

  //user Authentication Routes//

  router.post("/register", controller.registerUser);
  router.post("/verify-otp", controller.verifyOtp);
  router.post("/resend-otp", controller.resendOtp);
  router.post("/login", controller.userLogin);
  router.post("/google-sign-in", controller.googleSignIn);
  router.post("/forgot-password", controller.forgotPassword);
  router.post("/reset-password/:token", controller.resetPassword);

  router.get("/profile", authenticateUser, controller.userProfile);
  router.get("/doctors", controller.doctorPage);
  router.get("/time-slots", authenticateUser, controller.getAllTimeSlots);
  router.get("/doctor/:id", authenticateUser, controller.doctorDetails);
  router.patch("/profile/edit", authenticateUser, controller.updateUserInfo);
  router.get("/time-slots/:id", authenticateUser, controller.getTimeslots);
  router.get(
    "/time-slots/:id/dates",
    authenticateUser,
    controller.getDateSlots
  );
  router.post(
    "/fetch-prescription",
    authenticateUser,
    controller.fetchPrescription
  );
  router.post("/upload-documents", authenticateUser, controller.labRecords);
  router.get("/documents/:id", authenticateUser, controller.fetchDocuments);
  router.delete("/documents/:id", authenticateUser, controller.deleteDocument);
  router.get("/fetch-wallet/:id", authenticateUser, controller.getWallet);
  router.get("/transactions", authenticateUser, controller.getTransactions);
  router.get("/departments", authenticateUser, controller.getAllDepartments);

  /*  Booking Routes for booking Controller  */

  router.post(
    "/appointments",
    authenticateUser,
    _bookingController.BookAppointment
  );
  router.get(
    "/all-appointments",
    authenticateUser,
    _bookingController.getAllAppointments
  );
  router.patch(
    "/payment/status/:id",
    authenticateUser,
    _bookingController.updatePaymentStatus
  );
  router.post(
    "/wallet-payment",
    authenticateUser,
    _bookingController.walletPayment
  );
  router.put(
    "/update-wallet",
    authenticateUser,
    _bookingController.changeWalletAmount
  );
  router.get(
    "/booking-details/:id",
    authenticateUser,
    _bookingController.getBookingDetails
  );
  router.get(
    "/bookings/:id",
    authenticateUser,
    _bookingController.getAllBookingDetails
  );
  router.put(
    "/booking-details/:id",
    authenticateUser,
    _bookingController.cancelAppointment
  );

  return router;
};

export default userRoutes;
