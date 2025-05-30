import React, { useState } from "react";
import { ADMIN_API } from "../../Config";
import axiosJWT from "../../services/axiosService";
import { UserInterface } from "../../types/userInterface";
import showToast from "../../utils/toast";

const UserData: React.FC<UserInterface & { index: number }> = ({
  _id,
  name,
  email,
  isBlocked,
  index,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(isBlocked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    axiosJWT
      .patch(ADMIN_API + `/block-user/${_id}`)
      .then((response) => {
        // Check if isBlocked is true
        if (response.data.success && !response.data.user.isBlocked) {
          showToast(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  // Calculate serial number dynamically
  const serialNumber = index + 1;
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {serialNumber}
        </td>
        <td className="px-6 py-4 text-left">{name}</td>
        <td className="px-6 py-4 text-left">{email}</td>
        <td className="px-6 py-4 text-left">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                isChecked ? "bg-red-500" : "bg-green-400"
              }`}
            ></div>
            <p>{isChecked ? "Blocked" : "Active"}</p>
          </div>
        </td>
        <td className="px-6 py-4 text-left">
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`box block h-6 w-10 rounded-full ${
                  isChecked ? "bg-red-500" : "bg-primary"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
                  isChecked ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </td>
      </tr>
    </>
  );
};

export default UserData;
