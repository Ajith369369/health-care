import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProtectedRoute } from "./ProtectedRoutes";
import CommonLayout from "../components/user/commonLayout";

const Register = lazy(() => import("../pages/user/Register"));
const Login = lazy(() => import("../pages/user/Login"));
const ProfileUser = lazy(() => import("../pages/user/Profile"));

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
