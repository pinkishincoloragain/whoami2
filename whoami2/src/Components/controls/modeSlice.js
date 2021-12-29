import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "darkMode",
  initialState: {
    value: window.localStorage.getItem("theme") === "dark" ? true : false,
  },
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
