import React, { useEffect } from "react";
import Banner from "../components/users/Banner";
import Body from "../components/users/Body";
import Navbar from "../components/users/Navbar";

const Home: React.FC = () => {
  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Body />
    </>
  );
};

export default Home;
