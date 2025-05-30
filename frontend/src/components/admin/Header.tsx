import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAdmin } from "../../features/admin/AdminSlice";
import showToast from "../../utils/toast";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearAdmin());
    showToast("Logged out successfully", "success");
    navigate("/admin/login");
  };

  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLogout}
            className="border-2 p-2 border-white focus:outline-none hover:bg-blue-950 rounded"
          >
            logout
          </button>
          <button className="focus:outline-none">
            <FaUser className="text-xl text-gray-300 hover:text-white" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
