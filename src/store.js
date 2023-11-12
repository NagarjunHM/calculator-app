import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./redux/calculatorReducer";

export const store = configureStore({
  reducer: {
    calculatorReducer,
  },
});
