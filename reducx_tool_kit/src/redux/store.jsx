import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
// import { counterSlice } from "../Features/counter/counterSlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
