import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayoutDoctor from "../components/doctors/CommonLayout";
import { DoctorProtectedRoute } from "./ProtectedRoutes";
import { DoctorPublicRoute } from "./PublicRoutes";

const Chat = lazy(() => import("../pages/doctors/Chat"));
const Dashboard = lazy(() => import("../pages/doctors/Dashboard"));
const DoctorStatus = lazy(() => import("../pages/doctors/DoctorStatus"));
const EmailVerification = lazy(
  () => import("../pages/doctors/EmailVerification")
);
const PatientListing = lazy(() => import("../pages/doctors/PatientListing"));
const SignUp = lazy(() => import("../pages/doctors/SignUp"));
const SinglePatientView = lazy(
  () => import("../pages/doctors/SinglePatientView")
);
const Slot = lazy(() => import("../pages/doctors/Slot"));
const DocumentListing = lazy(() => import("../pages/users/DocumentListing"));
const Login = lazy(() => import("../pages/doctors/Login"));
const Profile = lazy(() => import("../pages/doctors/Profile"));

const DoctorRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Doctor Routes */}
        <Route element={<DoctorPublicRoute />}>
          <Route path="/doctor/register" element={<SignUp />} />
          <Route
            path="/doctor/verify-token/:token"
            element={<EmailVerification />}
          />
          <Route path="/doctor/login" element={<Login />} />
        </Route>

        {/* Protected Doctor Routes */}
        <Route element={<DoctorProtectedRoute />}>
          <Route element={<CommonLayoutDoctor />}>
            <Route path="/doctor" element={<Dashboard />} />
            <Route path="/doctor/profile" element={<Profile />} />
            <Route path="/doctor/slot" element={<Slot />} />
            <Route path="/doctor/patient-list" element={<PatientListing />} />
            <Route
              path="/patient-details/:id"
              element={<SinglePatientView />}
            />
            <Route path="/doctor/status/:doctorId" element={<DoctorStatus />} />
            <Route path="/doctor/documents/:id" element={<DocumentListing />} />
          </Route>
        </Route>
        <Route path="/doctor/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default DoctorRoutes;
