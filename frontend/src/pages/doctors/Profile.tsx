import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Navbar from "../../components/doctors/Navbar";
import { DOCTOR_API } from "../../Config";
import { doctorProfile } from "../../hooks/doctorProfile";

const Profile: React.FC = () => {
  const [departments, setDepartments] = useState<
    {
      _id: string;
      departmentName: string;
      isListed: boolean;
      createdAt: string;
      updatedAt: string;
    }[]
  >([]);

  const {
    profile,
    formData,
    imagePreview,
    certificatePreview,
    handleInputChange,
    handleSubmit,
  } = doctorProfile();

  useEffect(() => {
    const fetchDoctorDepartment = async () => {
      try {
        const response = await axios.get(`${DOCTOR_API}/departments`);
        if (response.data.success) {
          setDepartments(response.data.allDepartment);
        } else {
          throw new Error("Failed to fetch doctor details");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDepartment();
  }, []);

  let statusMessage = "";

  return (
    <>
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          {/* Profile content */}
          <div className="flex flex-col items-center w-full md:w-3/5 lg:w-2/5 justify-center mb-10 mt-9 bg-blue-200 rounded-lg p-6 shadow-lg text-white relative">
            {/* Profile Image */}
            <div className="relative mb-4">
              <img
                src={
                  imagePreview
                    ? imagePreview
                    : profile?.profileImage ?? "https://picsum.photos/200/"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full"
              />
              <label
                htmlFor="profile-image"
                className="absolute bottom-0 right-0 bg-white text-blue-900 rounded-full cursor-pointer border-4 border-white px-2 py-1 "
              >
                <input
                  type="file"
                  id="profile-image"
                  className="hidden"
                  accept="image/*"
                  name="imageFile"
                  onChange={handleInputChange}
                />
                <MdOutlineModeEdit />
              </label>
            </div>
            {/* Profile Fields */}
            <div className="bg-white w-full md:w-3/4 p-6 mb-3 rounded-lg shadow-lg">
              {/* Existing profile fields */}
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
                  name="doctorName"
                  value={formData?.doctorName ?? ""}
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
                  value={formData?.email ?? ""}
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
                  htmlFor="department"
                  className="block text-gray-700 font-semibold"
                >
                  Department:
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData?.department ?? ""}
                  onChange={handleInputChange}
                  className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option className="text-gray-700" value=""></option>
                  {departments
                    .filter((dept) => dept.isListed)
                    .map((dept) => (
                      <option
                        className="text-gray-700"
                        key={dept._id}
                        value={dept.departmentName}
                      >
                        {dept.departmentName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-semibold"
                >
                  Description:
                </label>
                <input
                  id="description"
                  name="description"
                  value={formData?.description ?? ""}
                  onChange={handleInputChange}
                  className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="education"
                  className="block text-gray-700 font-semibold"
                >
                  Education:
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData?.education ?? ""}
                  onChange={handleInputChange}
                  className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 font-semibold"
                >
                  Experience:
                </label>
                <input
                  id="experience"
                  name="experience"
                  value={formData?.experience ?? ""}
                  onChange={handleInputChange}
                  className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="licenseCertificate"
                  className="block text-gray-700 font-semibold"
                >
                  Doctor License Certificate :
                </label>
                <input
                  type="file"
                  id="licenseCertificate"
                  name="licenseCertificate"
                  className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  onChange={handleInputChange}
                />
                <img
                  src={
                    certificatePreview
                      ? certificatePreview
                      : profile?.licenseCertificate
                  }
                  alt="License Certificate Preview"
                  className="mt-2 w-full"
                />
              </div>
              {/* Status message */}
              <p
                className={
                  formData?.status === "approved"
                    ? "text-green-700 font-bold"
                    : formData?.status === "rejected"
                    ? "text-red-600 font-bold"
                    : "text-yellow-600 font-bold"
                }
              >
                {statusMessage}
              </p>
              {/* Update Profile Button */}
              <button
                className="bg-blue-900 text-white py-2 px-4 mt-5 ml-5 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500"
                onClick={handleSubmit}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Profile;
