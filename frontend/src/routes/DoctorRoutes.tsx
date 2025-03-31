import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayoutDoctor from "../components/doctors/CommonLayout";
import { DoctorProtectedRoute } from "./ProtectedRoutes";
import { DoctorPublicRoute } from "./PublicRoutes";

const DoctorLogin = lazy(() => import("../pages/doctors/Login"));
const ProfileDoctor = lazy(() => import("../pages/doctors/Profile"));

const DoctorRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Doctor Routes */}
        <Route element={<DoctorPublicRoute />}>
          <Route path="/login" element={<DoctorLogin />} />
        </Route>

        {/* Protected Doctor Routes */}
        <Route element={<DoctorProtectedRoute />}>
          <Route element={<CommonLayoutDoctor />}>
            <Route path="/profile" element={<ProfileDoctor />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default DoctorRoutes;
