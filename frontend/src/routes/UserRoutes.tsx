import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "../components/users/CommonLayout";
import { UserProtectedRoute } from "./ProtectedRoutes";
import { UserPublicRoute } from "./PublicRoutes";

const AboutUs = lazy(() => import("../components/users/AboutUs"));
const Home = lazy(() => import("../pages/Home"));
const AppointmentBooking = lazy(
  () => import("../pages/users/AppointmentBooking")
);
const AppointmentDetails = lazy(
  () => import("../pages/users/AppointmentDetails")
);
const AppointmentListing = lazy(
  () => import("../pages/users/AppointmentListing")
);
const AppointmentOnlineBooking = lazy(
  () => import("../pages/users/AppointmentOnlineBooking")
);
const Chat = lazy(() => import("../pages/users/Chat"));
const DoctorListing = lazy(() => import("../pages/users/DoctorListing"));
const DocumentListing = lazy(() => import("../pages/users/DocumentListing"));
const ForgotPassword = lazy(() => import("../pages/users/ForgotPassword"));
const LabRecord = lazy(() => import("../pages/users/LabRecord"));
const OfflineConsultation = lazy(
  () => import("../pages/users/OfflineConsultation")
);
const OnlineConsultation = lazy(
  () => import("../pages/users/OnlineConsultation")
);
const PaymentCompleted = lazy(() => import("../pages/users/PaymentCompleted"));
const ResetPassword = lazy(() => import("../pages/users/ResetPassword"));
const SingleDoctorView = lazy(() => import("../pages/users/SingleDoctorView"));
const VerifyOTP = lazy(() => import("../pages/users/VerifyOTP"));
const Wallet = lazy(() => import("../pages/users/Wallet"));
const WalletTransaction = lazy(
  () => import("../pages/users/WalletTransaction")
);
const Register = lazy(() => import("../pages/users/Register"));
const Login = lazy(() => import("../pages/users/Login"));
const ProfileUser = lazy(() => import("../pages/users/Profile"));

const UserRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<UserPublicRoute />}>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/user/about-us" element={<AboutUs />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/verify-otp" element={<VerifyOTP />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/forgot-password" element={<ForgotPassword />} />
          <Route path="/user/reset-password/:id" element={<ResetPassword />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<UserProtectedRoute />}>
          <Route element={<CommonLayout />}>
            <Route path="/user/profile" element={<ProfileUser />} />
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
