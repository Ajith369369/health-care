import React from "react";
import AppointmentsList from "../../components/users/AppointmentList";
import Navbar from "../../components/users/Navbar";

const AppointmentListing: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppointmentsList />
    </>
  );
};

export default AppointmentListing;
