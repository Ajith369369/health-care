import { createContext, ReactNode, useContext } from "react";
import { io, Socket } from "socket.io-client";
import { BACKEND_URL } from "../Config";

const SocketContext = createContext<Socket | null>(null);
SocketContext.displayName = "Socket Context";

export const useSocket = () => useContext(SocketContext);

const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const socket = io(BACKEND_URL, {
    withCredentials: true,});
  socket.on("connect", () => console.log("connected"));
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
