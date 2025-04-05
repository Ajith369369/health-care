import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/users/Navbar";
import PaymentMessage from "../../components/users/Payment";
import { USER_API } from "../../Config";
import axiosJWT from "../../services/axiosService";

const PaymentCompleted: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const status = searchParams.get("success");
  const isSuccess = status === "true" ? true : false;

  if (status) {
    const paymentStatus = isSuccess ? "Paid" : "Failed";
    axiosJWT
      .patch(USER_API + `/payment/status/${id}`, { paymentStatus })
      .then(({ data }) => console.log(data))
      .catch((err: any) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <PaymentMessage isSuccess={isSuccess} />
    </>
  );
};

export default PaymentCompleted;
