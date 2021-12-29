import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: window.localStorage.getItem("theme") === "true" ? true : false,
};

export const modeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
      window.localStorage.setItem("theme", state.value);
    },
    setMode: (state, action) => {
      state.value = action.payload;
      window.localStorage.setItem("theme", state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode, changeMode } = modeSlice.actions;

export default modeSlice.reducer;
