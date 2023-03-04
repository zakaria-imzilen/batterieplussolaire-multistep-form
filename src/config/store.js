import { configureStore } from "@reduxjs/toolkit";
import StepsSlice from "../features/StepsSlice";

export default configureStore({
	reducer: {
		steps: StepsSlice,
	},
});
