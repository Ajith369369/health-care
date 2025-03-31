import React from 'react';
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRouteAdmin, AdminProtectedRoute } from "./ProtectedRoutes";

const AdminLogin = lazy(() => import("../pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));


const AdminRoutes:React.FC = () => {
  return (
    <>
      
    </>
  );
};

export default AdminRoutes;
