import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "../users/UserSlice";
import DoctorSlice from "../doctors/DoctorSlice";
import AdminSlice from "../admin/AdminSlice";
export const rootReducer = combineReducers({
  UserSlice,
  DoctorSlice,
  AdminSlice,
});
export type RootState = ReturnType<typeof rootReducer>;