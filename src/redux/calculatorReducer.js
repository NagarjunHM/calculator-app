import { createSlice } from "@reduxjs/toolkit";

const initialState = { input: "" };

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    // function for all number input clicks
    buttonInput: (state, action) => {
      if (state.input === "Error") {
        state.input = "";
      }
      state.input = state.input + action.payload;
    },

    // function to reset the input value = ""
    clearInput: (state) => {
      state.input = "";
    },

    // function for setting result to the input state
    resultCalculation: (state, action) => {
      try {
        if (state.input === "") {
          return;
        }
        const res = String(eval(state.input).toFixed(2).replace(/\.00$/, ""));
        console.log(res);
        if (!isNaN(res)) {
          state.input = res;
        } else {
          state.input = "Error";
        }
      } catch (e) {
        state.input = "Error";
      }
    },

    // function to delete the last character
    deleteLastCharacter: (state, action) => {
      let res = String(state.input);
      if (res == "Error") {
        state.input = "";
        return;
      }
      res = res.substring(0, res.length - 1);
      res = res.replace(/ .$/, "");
      state.input = res;
    },
  },
});

export const {
  buttonInput,
  clearInput,
  resultCalculation,
  deleteLastCharacter,
} = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
export const calculatorSelector = (state) => state.calculatorReducer;
