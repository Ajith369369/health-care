import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/users/Navbar";
import { USER_API } from "../../Config";
import { useAppSelector } from "../../features/store/store";
import axiosJWT from "../../services/axiosService";

const Wallet: React.FC = () => {
  const user = useAppSelector((state) => state.UserSlice);
  const [walletAmount, setWalletAmount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWalletAmount = async () => {
      const response = await axiosJWT.get(`${USER_API}/fetch-wallet/${user.id}`);
      setWalletAmount(response.data.getWallet.balance);
    };

    fetchWalletAmount();
  }, [user.id]);

  const goToWalletHistory = () => {
    navigate("/user/wallet-history");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-1/3 mt-32 mb-28">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Wallet
          </h2>
          <div className="text-center text-2xl text-gray-700">
            Your wallet amount is:
            <span className="block text-4xl font-bold text-green-500 mt-2">
              ${walletAmount}
            </span>
          </div>
          <button
            className="mt-8 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            onClick={goToWalletHistory}
          >
            View Wallet History
          </button>
        </div>
      </div>
    </>
  );
};

export default Wallet;
