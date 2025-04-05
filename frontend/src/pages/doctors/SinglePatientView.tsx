import React from "react";
import Navbar from "../../components/doctors/Navbar";
import SinglePatientDetails from "../../components/doctors/SinglePatientDetails";

const SinglePatientView: React.FC = () => {
  return (
    <>
      <Navbar />
      <SinglePatientDetails />
    </>
  );
};

export default SinglePatientView;
