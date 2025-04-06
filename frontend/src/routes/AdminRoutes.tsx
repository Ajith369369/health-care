import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminProtectedRoute } from "./ProtectedRoutes";
import { AdminPublicRoute } from "./PublicRoutes";

const DepartmentPage = lazy(() => import("../pages/admin/Department"));
const DoctorDetails = lazy(() => import("../pages/admin/DoctorDetails"));
const DoctorListing = lazy(() => import("../pages/admin/DoctorListing"));
const DoctorVerification = lazy(
  () => import("../pages/admin/DoctorVerification")
);
const RequestedDoctorListing = lazy(
  () => import("../pages/admin/RequestedDoctorListing")
);
const UserListing = lazy(() => import("../pages/admin/UserListing"));
const Login = lazy(() => import("../pages/admin/Login"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

const AdminRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Admin Routes */}
        <Route element={<AdminPublicRoute />}>
          <Route path="/admin/login" element={<Login />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserListing />} />
          <Route path="/admin/department" element={<DepartmentPage />} />
          <Route path="/admin/doctors" element={<DoctorListing />} />
          <Route
            path="/admin/requested-doctors"
            element={<RequestedDoctorListing />}
          />
          <Route path="/admin/doctors/:id" element={<DoctorDetails />} />
          <Route
            path="/admin/doctors/:id/verification"
            element={<DoctorVerification />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
