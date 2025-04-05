import React from "react";
import DoctorListingComponent from "../../components/users/DoctorListing";
import Navbar from "../../components/users/Navbar";

const DoctorListing: React.FC = () => {
  return (
    <>
      <Navbar />
      <DoctorListingComponent />
    </>
  );
};

export default DoctorListing;
