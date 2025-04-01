import { clearUser } from "../features/users/UserSlice";
import store from "../features/store/store";
import showToast, { ToastType } from "./toast";

const logout = (message: string, type: ToastType = "success"): void => {
  store.dispatch(clearUser());
  showToast(message, type);
};
export default logout;
