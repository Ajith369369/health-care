import React from "react";
import Banner from "../../components/doctors/Banner";
import Body from "../../components/doctors/Body";
import Navbar from "../../components/doctors/Navbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Body />
    </>
  );
};

export default Dashboard;
