import React from "react";
import Navbar from "../../components/users/Navbar";
import OnlineDoctors from "../../components/users/OnlineConsultation";

const OnlineConsultation: React.FC = () => {
  return (
    <>
      <Navbar />
      <OnlineDoctors />
    </>
  );
};

export default OnlineConsultation;
