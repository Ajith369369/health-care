import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const CommonLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
