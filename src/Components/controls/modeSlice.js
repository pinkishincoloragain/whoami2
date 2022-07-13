import { createSlice } from "@reduxjs/toolkit";

const setDarkMode = () => {
  let localTheme = window.localStorage.getItem("theme");
  if (localTheme === "true") {
    return true;
  } else if (localTheme === "false") {
    return false;
  } else {
    return true;
  }
};
let initialState = {
  value: setDarkMode(),
};

export const modeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
      window.localStorage.setItem("theme", state.value);
      if (document.documentElement.classList.contains("dark"))
        document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");
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
