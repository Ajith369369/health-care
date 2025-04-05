import React from "react";
import Navbar from "../../components/users/Navbar";
import SingleDoctorDetails from "../../components/users/SingleDoctorDetails";

const SingleDoctorView: React.FC = () => {
  return (
    <>
      <Navbar />
      <SingleDoctorDetails />
    </>
  );
};

export default SingleDoctorView;
