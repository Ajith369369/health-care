import React from "react";
import DoctorVerificationComponent from "../../components/admin/DoctorVerification";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const DoctorVerification: React.FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-blue-950 mt-5 text-center">
              Verification Page
            </h1>
            <DoctorVerificationComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorVerification;
