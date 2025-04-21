import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { TOKEN_API } from "../Config";
import { Payload } from "../types/propsType";
import logout from "../utils/logout";

const axiosJWT = axios.create();
axiosJWT.defaults.withCredentials = true;

const getAccessToken = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      // Handle case when token doesn't exist in local storage
      console.error("Access token not found in local storage");
      return null;
    }
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("🛠️ Headers: ", headers);
    console.log("🛠️ TOKEN_API: ", TOKEN_API);

    const { data } = await axios.get(`${TOKEN_API}/access-token`, { headers });
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

axiosJWT.interceptors.request.use(async (config) => {
  try {
    const accessToken = await getAccessToken();
    console.log('🛠️ accessToken: ', accessToken)

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log('🛠️ config.headers.Authorization: ', config.headers.Authorization)
    }
  } catch (error) {
    console.log("Error in adding token to request:", error);
  }
  return config;
});

export default axiosJWT;
