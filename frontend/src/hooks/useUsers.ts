import { useEffect, useState } from "react";
import { ADMIN_API } from "../Config";
import axiosJWT from "../services/axiosService";
import { UserInterface } from "../types/userInterface";

export const useUsers = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    axiosJWT
      .get(ADMIN_API + "/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((error: any) => console.log(error));
  }, [setUsers]);

  return { users, setUsers };
};
