import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./reducer.js";

export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});
