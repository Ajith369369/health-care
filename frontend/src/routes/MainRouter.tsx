import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/Loading";
import PageNotFound from "../pages/PageNotFound";
import AdminRoutes from "./AdminRoutes";
import DoctorRoutes from "./DoctorRoutes";
import UserRoutes from "./UserRoutes";

const MainRouter: React.FC = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/doctor/*" element={<DoctorRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MainRouter;
