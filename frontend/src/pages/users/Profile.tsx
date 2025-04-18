import React from "react";
import { BsWallet } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../../components/users/Navbar";
import { useProfile } from "../../hooks/useProfile";

const Profile: React.FC = () => {
  const { profile, formData, imagePreview, handleInputChange, handleSubmit } =
    useProfile();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <h2 className="text-4xl font-bold mt-6 text-center text-blue-900">
          Profile
        </h2>
        <div className="bg-blue-900 mt-10 mb-10 w-full max-w-2xl rounded-lg shadow-lg p-6 relative">
          {/* Wallet button */}
          <Link
            to="/user/wallet"
            className="absolute top-4 right-4 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-md p-2 flex items-center"
          >
            <BsWallet className="h-7 w-7" />
            <span className="ml-2">Wallet</span>
          </Link>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src={
                  imagePreview
                    ? imagePreview
                    : profile?.profilePicture ?? "https://picsum.photos/200/"
                }
                alt="Profile"
                className="w-36 h-36 rounded-full"
              />
              <label
                htmlFor="profile-image"
                className="absolute bottom-0 right-0 bg-white text-blue-900 rounded-full cursor-pointer border-4 border-white p-1"
              >
                <input
                  type="file"
                  id="profile-image"
                  name="imageFile"
                  className="hidden"
                  onChange={handleInputChange}
                />
                <MdOutlineModeEdit />
              </label>
            </div>
            <div className="w-full">
              {/* Profile Fields */}
              <div className="bg-white w-full rounded-lg shadow-lg p-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                    className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile?.email ?? ""}
                    onChange={handleInputChange}
                    className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-gray-700 font-semibold"
                  >
                    Age:
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData?.age ?? ""}
                    onChange={handleInputChange}
                    className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 font-semibold"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData?.phoneNumber ?? ""}
                    onChange={handleInputChange}
                    className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-gray-700 font-semibold"
                  >
                    Gender:
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData?.gender ?? ""}
                    onChange={handleInputChange}
                    className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  >
                    <option className="text-gray-700" value="male">
                      Male
                    </option>
                    <option className="text-gray-700" value="female">
                      Female
                    </option>
                    <option className="text-gray-700" value="others">
                      Others
                    </option>
                  </select>
                </div>
                {/* Update Profile Button */}
                <button
                  className="bg-blue-900 text-white py-2 px-4 mt-3 w-full rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500"
                  onClick={handleSubmit}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
