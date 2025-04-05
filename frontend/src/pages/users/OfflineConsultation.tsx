import React from "react";
import Navbar from "../../components/users/Navbar";
import OfflineDoctors from "../../components/users/OfflineConsultation";

const OfflineConsultation: React.FC = () => {
  return (
    <>
      <Navbar />
      <OfflineDoctors />
    </>
  );
};

export default OfflineConsultation;
