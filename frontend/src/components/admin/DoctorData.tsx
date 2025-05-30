import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Add this import
import { Link } from "react-router-dom";
import { ADMIN_API } from "../../Config";
import { clearDoctor } from "../../features/doctors/DoctorSlice"; // Add this import
import { useDoctors } from "../../hooks/useDoctors";
import { DoctorInterface } from "../../interfaces/doctor";
import axiosJWT from "../../services/axiosService";
import showToast from "../../utils/toast";

const DoctorData: React.FC = () => {
  const { doctors, setDoctors } = useDoctors();
  const dispatch = useDispatch();

  const approvedDoctors = doctors.filter((doctor) => doctor.isApproved);
  const [serialNumber] = useState<number>(1);

  const handleCheckboxChange = (doctor: DoctorInterface) => {
    const newDoctors = doctors.map((item) => {
      if (doctor._id === item._id) {
        doctor.isBlocked = !doctor.isBlocked;
        if (doctor.isBlocked) {
          dispatch(clearDoctor()); // Dispatch clearDoctor when doctor is blocked
        }
      }
      return item;
    });

    setDoctors(newDoctors);

    axiosJWT
      .patch(ADMIN_API + `/block-doctor/${doctor._id}`)
      .then((response) => {
        if (response.data.success && !response.data.doctor.isBlocked) {
          showToast(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {approvedDoctors.map((doctor: DoctorInterface, index) => (
        <tr
          key={doctor._id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {serialNumber + index}
          </td>
          <td className="px-6 py-4 text-left">{doctor.doctorName}</td>
          <td className="px-6 py-4 text-left">{doctor.email}</td>
          <td className="px-6 py-4 text-left">{doctor.department}</td>
          <td className="px-6 py-4 text-left">
            {doctor.isVerified ? "Yes" : "No"}
          </td>
          <td className="px-6 py-4 text-left">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  doctor.isBlocked ? "bg-red-500" : "bg-green-400"
                }`}
              ></div>
              <p>{doctor.isBlocked ? "Blocked" : "Active"}</p>
            </div>
          </td>
          <td className="px-6 py-4 text-left">
            <Link
              to={`/admin/doctors/${doctor._id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </td>
          <td className="px-6 py-4 text-left">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={doctor.isBlocked}
                  onChange={() => handleCheckboxChange(doctor)}
                  className="sr-only"
                />
                <div
                  className={`box block h-6 w-10 rounded-full ${
                    doctor.isBlocked ? "bg-red-500" : "bg-primary"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
                    doctor.isBlocked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DoctorData;
