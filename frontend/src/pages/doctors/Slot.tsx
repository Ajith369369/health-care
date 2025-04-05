import React from "react";
import Navbar from "../../components/doctors/Navbar";
import Calendar from "../../components/doctors/calendar/DoctorCalendar";

const Slot: React.FC = () => {
  return (
    <>
      <Navbar />
      <Calendar />
    </>
  );
};

export default Slot;
