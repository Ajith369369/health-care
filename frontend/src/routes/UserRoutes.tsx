import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "../components/users/CommonLayout";
import { UserProtectedRoute } from "./ProtectedRoutes";

const Register = lazy(() => import("../pages/users/Register"));
const Login = lazy(() => import("../pages/users/Login"));
const ProfileUser = lazy(() => import("../pages/users/Profile"));

const UserRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRouteUser />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<UserProtectedRoute />}>
          <Route element={<CommonLayout />}>
            <Route path="/profile" element={<ProfileUser />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
