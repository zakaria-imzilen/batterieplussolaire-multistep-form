import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitForm = createAsyncThunk("submitForm", async () => {});

const stepsSlice = createSlice({
	name: "steps",
	initialState: {
		activeInput: 0,
		formValues: {
			address: "",
			bill: "500 à 1000 €",
			areYou: "Propriétaire (Résidence principale)",
			type: "Maison",
			research: "Je commence mes recherches",
			goal: "Réduire ma facture d'électricité de 50% à 70%",
			chauffage: [
				"Pompe à chaleur Air/Eau (Chauffage au sol, radiateur haute et moyenne température)",
			],
			production: "Ballon solaire",
			age: "35 - 50 ans",
			people: "2",
			reserve: "Entre 22500 et 35000 €",
			duration: "D'ici 3 mois",
			name: "",
			genre: "Monsieur",
			phone: "",
			email: "",
		},
		formSubmitted: {
			status: "idle",
			error: null,
		},
	},
	reducers: {
		changeInput: (state, { payload }) => {
			if (payload.inputName === "chauffage") {
				state.formValues[payload.inputName].push(payload.value);
			} else {
				state.formValues[payload.inputName] = payload.value;
			}
		},
		nextInput: (state) => {
			if (state.activeInput < 15) {
				state.activeInput += 1;
			}
		},
	},
});

export default stepsSlice.reducer;
export const { changeInput, nextInput } = stepsSlice.actions;
