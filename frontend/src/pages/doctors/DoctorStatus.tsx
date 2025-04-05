import React from "react";
import Navbar from "../../components/doctors/Navbar";
import DoctorStatusComponent from "../../components/doctors/DoctorStatus";

const DoctorStatus: React.FC = () => {
  return (
    <>
      <Navbar />
      <DoctorStatusComponent />
    </>
  );
};

export default DoctorStatus;
