import React from "react";
import Navbar from "../../components/users/Navbar";
import AppointmentOnlineBookingComponent from "../../components/users/AppointmentOnlineBooking";

const AppointmentOnlineBooking: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppointmentOnlineBookingComponent />
    </>
  );
};

export default AppointmentOnlineBooking;
