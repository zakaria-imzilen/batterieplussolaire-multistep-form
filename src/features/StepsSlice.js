import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import emailjs from "@emailjs/browser";

export const submitForm = createAsyncThunk(
	"steps/submitForm",
	async ({
		address,
		bill,
		areYou,
		type,
		research,
		goal,
		chauffage,
		production,
		age,
		people,
		reserve,
		duration,
		name,
		genre,
		phone,
		email,
	}) => {
		const result = await emailjs.send("service_hrnmx5l", "template_5tekqs4", {
			address,
			bill,
			areYou,
			type,
			research,
			goal,
			chauffage: chauffage.join(", "),
			production,
			age,
			people,
			reserve,
			duration,
			name,
			genre,
			phone,
			email: email,
		});

		return result.status;
	}
);

const stepsSlice = createSlice({
	name: "steps",
	initialState: {
		activeInput: 9,
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
			// Chauffage input permit too many select values
			if (payload.inputName === "chauffage") {
				// Check if the selected value already exist
				if (state.formValues[payload.inputName].includes(payload.value)) {
					// Check if the array is empty
					if (state.formValues[payload.inputName].length > 1) {
						const filtred = state.formValues[payload.inputName].filter(
							(val) => val !== payload.value
						);
						state.formValues[payload.inputName] = filtred;
					}
					// Else, cannot remove the selected value
				} else {
					state.formValues[payload.inputName].push(payload.value);
				}
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
	extraReducers: (builder) => {
		builder.addCase(submitForm.pending, (state) => {
			state.formSubmitted.status = "pending";
			state.formSubmitted.error = null;
		});
		builder.addCase(submitForm.rejected, (state, { payload }) => {
			state.formSubmitted.error = payload;
			state.formSubmitted.status = "failed";
		});
		builder.addCase(submitForm.fulfilled, (state) => {
			state.formSubmitted.status = "fulfilled";
			state.formSubmitted.error = null;

			// Reset inputs
			state.activeInput = 0;
			state.formValues = {
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
			};
		});
	},
});

export default stepsSlice.reducer;
export const { changeInput, nextInput } = stepsSlice.actions;
