import React from "react";
import Navbar from "../components/users/Navbar";
import Banner from "../components/users/Banner";
import Body from "../components/users/Body";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Body />
    </>
  );
};

export default Home;
