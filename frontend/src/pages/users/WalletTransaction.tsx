import React from "react";
import Navbar from "../../components/users/Navbar";
import Transaction from "../../components/users/Transaction";

const WalletTransaction: React.FC = () => {
  return (
    <>
      <Navbar />
      <Transaction />
    </>
  );
};

export default WalletTransaction;
