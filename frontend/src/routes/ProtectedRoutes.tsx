import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../features/store/store";
import ZegoCloud from "../utils/zegoCloud";

export const UserProtectedRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector((state) => state.UserSlice);
  return isAuthenticated && role === "user" ? (
    // @ts-expect-error
    <ZegoCloud>
      <Outlet />
    </ZegoCloud>
  ) : (
    <Navigate to={"/user/login"} replace />
  );
};

export const DoctorProtectedRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector(
    (state) => state.DoctorSlice
  );
  return isAuthenticated && role === "doctor" ? (
    <Outlet />
  ) : (
    <Navigate to={"/doctor/login"} replace />
  );
};

export const AdminProtectedRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector((state) => state.AdminSlice);
  return isAuthenticated !== null && role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={"/admin/login"} replace />
  );
};
