import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../features/store/store";

export const UserPublicRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector((state) => state.UserSlice);
  if (role === "user") {
    return isAuthenticated ? <Navigate to={"/"} replace /> : <Outlet />;
  }
  return <Outlet />;
};

export const DoctorPublicRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector(
    (state) => state.DoctorSlice
  );
  if (role === "doctor") {
    return isAuthenticated ? <Navigate to={"/doctor"} replace /> : <Outlet />;
  }
  return <Outlet />;
};

export const AdminPublicRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppSelector((state) => state.AdminSlice);
  if (role === "admin") {
    return isAuthenticated ? <Navigate to={"/admin"} replace /> : <Outlet />;
  }
  return <Outlet />;
};
