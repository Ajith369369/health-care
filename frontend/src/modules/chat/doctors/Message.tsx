import React from "react";
import { format } from "timeago.js";
import { MessageProps } from "../../../types/messageInterface";

const Message: React.FC<MessageProps> = ({
  message,
  own,
  receiverProfilePicture,
  receiverName,
}) => {
  return (
    <>
      <div
        className={`message flex flex-col mt-5 ml-5 ${
          own ? "items-end" : "items-start"
        }`}
      >
        <div className="fixed top-1 left-0  w-full lg:w-3/4 lg:ml-96 mt-16 h-13 bg-gray-200 flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              src={receiverProfilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <span className="text-xl font-bold">{receiverName}</span>
          </div>
        </div>
        <div className="flex mt-14">
          <p
            className={`messageText p-2 rounded-lg ${
              own ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {message?.text}
          </p>
        </div>
        <div className="text-xs mt-1">
          {message?.createdAt ? format(message.createdAt) : ""}
        </div>
      </div>
    </>
  );
};

export default Message;
