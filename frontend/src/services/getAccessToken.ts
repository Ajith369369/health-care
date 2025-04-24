import { TOKEN_API } from "../Config";
import { jwtDecode } from "jwt-decode";
import { Payload } from "../types/propsType";
import logout from "../utils/logout";
import axiosJWT from "./axiosService";

export const getAccessToken = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        // Handle case when token doesn't exist in local storage
        console.log("Access token not found in local storage");
        return null;
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      console.log("🛠️ Headers: ", headers);
      console.log("🛠️ TOKEN_API: ", TOKEN_API);
  
      const { data } = await axiosJWT.get(`${TOKEN_API}/access-token`, { headers });
      console.log("🛠️ { data }: ", data);
  
      const decodedToken: Payload = await jwtDecode(token);
      console.log('🛠️ decodedToken: ', decodedToken)
  
      const { role } = decodedToken;
      console.log('🛠️ { role }: ', { role })
  
      if (role === "doctor" || role === "user") {
        const { user } = data;
        if (user && user.isBlocked) {
          logout("Your account has been blocked by the administrator", "error");
          return null;
        }
      }
  
      console.log('🛠️ token: ', token)
      return token;
    } catch (error) {
      console.log(error, "Error in getting token");
      return null;
    }
  };