import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { StrictMode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Provider , useDispatch} from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SocketProvider from "./context/SocketContext";
import store, { persistor } from "./features/store/store";
import MainRouter from "./routes/MainRouter";
import { GOOGLE_CLIENT_ID } from "../src/Config";
import { jwtDecode } from "jwt-decode";
import axiosJWT from "../src/services/axiosService";
import { USER_API } from "../src/Config";
import showToast from "../src/utils/toast";
import { setUser } from "../src/features/users/UserSlice";

const GoogleAuthHandler: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const credential = params.get("credential");

    if (credential) {
      const decodedUser = jwtDecode(credential);

      axiosJWT
        .post(USER_API + "/google-sign-in", { user: decodedUser })
        .then(({ data }) => {
          const { message, user, accessToken } = data;

          localStorage.setItem("access_token", accessToken);
          dispatch(setUser({
            isAuthenticated: true,
            name: user.name,
            role: user.role,
            id: user._id,
          }));

          showToast(message, "success");
          navigate("/");

          // Clean up the URL
          const url = new URL(window.location.href);
          url.searchParams.delete("credential");
          window.history.replaceState({}, document.title, url.pathname);
        })
        .catch(() => {
          showToast("Google login failed", "error");
          navigate("/login");
        });
    }
  }, [dispatch, navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <BrowserRouter>
                <SocketProvider>
                  <MainRouter />
                </SocketProvider>
              </BrowserRouter>
            </GoogleOAuthProvider>
            <Toaster />
          </PersistGate>
        </Provider>
      </StrictMode>
    </>
  );
};

export default App;
