import React from "react";
import AppointmentDetails from "../../components/doctors/AppointmentDetails";
import Navbar from "../../components/doctors/Navbar";

const PatientListing: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppointmentDetails />
    </>
  );
};

export default PatientListing;
