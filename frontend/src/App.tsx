import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SocketProvider from "./context/SocketContext";
import store, { persistor } from "./features/store/store";
import MainRouter from "./routes/MainRouter";
import { GOOGLE_CLIENT_ID } from "../src/Config";

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
