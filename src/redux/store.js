import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import profileReducer from "./features/profileSlice";
import candidatesReducer from "./features/candidatesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    candidates: candidatesReducer,
  },
});

export default store;
