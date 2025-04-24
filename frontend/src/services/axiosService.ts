import axios from "axios";
import { BACKEND_URL } from "../Config";
import { getAccessToken } from "./getAccessToken";

const axiosConfig = {
  baseURL: BACKEND_URL, // The base URL for the API
  withCredentials: true, // Ensure cookies are sent with the request
};

const axiosJWT = axios.create(axiosConfig);
axiosJWT.defaults.withCredentials = true;

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
