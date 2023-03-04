import { createSlice } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
	name: "steps",
	initialState: {
		activeInput: 0,
		formValues: {
			address: "",
			bill: "",
			areYou: "",
			type: "",
			research: "",
			goal: "",
			chauffage: "",
			production: "",
			age: "",
			people: 1,
			reserve: "Entre 22500 et 35000 €",
			duration: "D'ici 3 mois",
			name: "",
			genre: "",
			phone: "",
			email: "",
		},
	},
	reducers: {
		changeInput: (state, { payload }) => {
			state.formValues[payload.inputName] = payload.value;
		},
		nextInput: (state) => {
			state.activeInput += 1;
		},
	},
});

export default stepsSlice.reducer;
export const { changeInput, nextInput } = stepsSlice.actions;
