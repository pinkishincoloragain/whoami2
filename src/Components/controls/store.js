import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlice";

export default configureStore({
	reducer: {
		mode: modeReducer,
	},
});
