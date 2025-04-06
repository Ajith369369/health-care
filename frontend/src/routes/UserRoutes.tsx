import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "../components/users/CommonLayout";
import AppointmentBooking from "../pages/users/AppointmentBooking";
import AppointmentDetails from "../pages/users/AppointmentDetails";
import AppointmentListing from "../pages/users/AppointmentListing";
import AppointmentOnlineBooking from "../pages/users/AppointmentOnlineBooking";
import Chat from "../pages/users/Chat";
import DoctorListing from "../pages/users/DoctorListing";
import DocumentListing from "../pages/users/DocumentListing";
import LabRecord from "../pages/users/LabRecord";
import OfflineConsultation from "../pages/users/OfflineConsultation";
import OnlineConsultation from "../pages/users/OnlineConsultation";
import PaymentCompleted from "../pages/users/PaymentCompleted";
import SingleDoctorView from "../pages/users/SingleDoctorView";
import Wallet from "../pages/users/Wallet";
import WalletTransaction from "../pages/users/WalletTransaction";
import { UserProtectedRoute } from "./ProtectedRoutes";
import { UserPublicRoute } from "./PublicRoutes";

const Register = lazy(() => import("../pages/users/Register"));
const Login = lazy(() => import("../pages/users/Login"));
const ProfileUser = lazy(() => import("../pages/users/Profile"));

const UserRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<UserPublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<UserProtectedRoute />}>
          <Route element={<CommonLayout />}>
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/user/doctor" element={<DoctorListing />} />
            <Route path="/user/doctor/:id" element={<SingleDoctorView />} />
            <Route
              path="/user/appointment-offline/:id"
              element={<AppointmentBooking />}
            />
            <Route
              path="/user/appointment-online/:id"
              element={<AppointmentOnlineBooking />}
            />
            <Route path="/payment-status/:id" element={<PaymentCompleted />} />
            <Route
              path="/appointment-details/:id"
              element={<AppointmentDetails />}
            />
            <Route
              path="/user/appointment-list"
              element={<AppointmentListing />}
            />
            <Route path="/user/lab-record" element={<LabRecord />} />
            <Route path="/user/documents/:id" element={<DocumentListing />} />
            <Route
              path="/user/online-consultation"
              element={<OnlineConsultation />}
            />
            <Route
              path="/user/offline-consultation"
              element={<OfflineConsultation />}
            />
            <Route path="/user/wallet" element={<Wallet />} />
            <Route
              path="/user/wallet-history"
              element={<WalletTransaction />}
            />
          </Route>
          <Route path="/user/chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
