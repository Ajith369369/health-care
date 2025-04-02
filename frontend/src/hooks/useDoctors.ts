import { useEffect, useState } from "react";
import { ADMIN_API } from "../Config";
import { DoctorInterface } from "../interfaces/doctorInterface";
import axiosJWT from "../utils/axiosService";

const useDoctors = () => {
  const [doctors, setDoctors] = useState<DoctorInterface[]>([]);

  useEffect(() => {
    axiosJWT
      .get(ADMIN_API + "/doctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        setDoctors(data.doctors);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return { doctors, setDoctors };
};

export default useDoctors;
