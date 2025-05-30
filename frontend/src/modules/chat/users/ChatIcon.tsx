import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../features/store/store";

const ChatIcon: React.FC = () => {
  const { role, isAuthenticated } = useAppSelector((state) => state.UserSlice);
  //   const socket = useSocket();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const [notificationCount, setNotificationCount] = useState<number>(0);

  const isExcludedRoute =
    pathname === "/chat" ||
    pathname === "/restaurant/chat" ||
    pathname.startsWith("/menu") ||
    pathname.startsWith("/cart");
  if (!isAuthenticated || isExcludedRoute) return null;
  return (
    <>
      <button
        className={`fixed z-40 right-2 bottom-11 flex h-[60px] w-[60px] items-center 
    justify-center rounded-full bg-[#6A64F1] text-white hover:bg-indigo-600 transition ease-out`}
        onClick={() => {
          const to: string = role === "user" ? "/chat" : "/restaurant/chat";
          navigate(to);
        }}
      >
        <span className="cross-icon hidden">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="chat-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default ChatIcon;
