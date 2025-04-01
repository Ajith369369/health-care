import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminProtectedRoute } from "./ProtectedRoutes";
import { AdminPublicRoute } from "./PublicRoutes";

const Login = lazy(() => import("../pages/admin/Login"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

const AdminRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Admin Routes */}
        <Route element={<AdminPublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
