import React from "react";
import Navbar from "../../components/users/Navbar";
import AppointmentBookingComponent from "../../components/users/AppointmentBooking";

const AppointmentBooking: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppointmentBookingComponent />
    </>
  );
};

export default AppointmentBooking;
