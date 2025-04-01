import toast from "react-hot-toast";
import React from "react";

export type ToastType = "success" | "error";
/* export const showToast = (message: string, type: ToastType = "success") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.success(message);
      break;
  }
};

export default showToast; */

const Toast: React.FC = (message: string, type: ToastType = "success") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.success(message);
      break;
  }
};

export default Toast;
