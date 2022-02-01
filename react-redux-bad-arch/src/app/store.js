import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import labelReducer from "../features/label/labelSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    label: labelReducer
  }
});
