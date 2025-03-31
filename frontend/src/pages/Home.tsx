import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Body from "../components/Body";

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
