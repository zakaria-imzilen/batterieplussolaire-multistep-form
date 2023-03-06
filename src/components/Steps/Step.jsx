import { Alert, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { changeInput, nextInput, submitForm } from "../../features/StepsSlice";
import "./Step.css";
import { AnimatePresence, motion } from "framer-motion";
import stepsData from "../../config/data";

const Step = ({}) => {
	// Return letter instead of number
	const returnLetter = (num) => {
		switch (num) {
			case 0:
				return "A";
			case 1:
				return "B";
			case 2:
				return "C";
			case 3:
				return "D";
			case 4:
				return "E";

			default:
				return "F";
		}
	};

	const activeStep = useSelector((state) => state.steps.activeInput);

	// Actual INPUT Data
	let question = stepsData[activeStep].question;
	let selectValues = stepsData[activeStep].selectValues;
	let inputType = stepsData[activeStep].inputType;
	let inputName = stepsData[activeStep].inputName;

	const dispatch = useDispatch();
	const inputState = useSelector((state) => state.steps.formValues[inputName]);
	const formData = useSelector((state) => state.steps.formValues);
	const validForm = useSelector((state) => state.steps.formSubmitted.status);

	const [inputVal, setInputVal] = useState("");

	// Handle Ok button
	const handleOk = () => {
		if (inputType === "text") {
			switch (inputName) {
				case "address":
					if (inputVal.length < 4) {
						toast.warning("Address doit comprendre au minimum 4 lettres");
					} else {
						dispatch(nextInput());
						dispatch(changeInput({ inputName, value: inputVal }));
						setInputVal("");
					}
					break;

				case "name":
					if (inputVal.length < 3) {
						toast.warning("Le nom doit comprendre au minimum 3 lettres");
					} else {
						dispatch(nextInput());
						dispatch(changeInput({ inputName, value: inputVal }));
						setInputVal("");
					}
					break;

				case "phone":
					const regexNum =
						/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/g;
					if (!regexNum.test(inputVal)) {
						toast.warning(
							"Le numéro de téléphone non valide (format: 04 90 66 41 12)"
						);
					} else {
						dispatch(nextInput());
						dispatch(changeInput({ inputName, value: inputVal }));
						setInputVal("");
					}
					break;

				case "email":
					const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
					if (!regexEmail.test(inputVal)) {
						toast.warning(
							"L'Email est non valide (format: contact@solairebatterie.fr)"
						);
					} else {
						dispatch(nextInput());
						dispatch(changeInput({ inputName, value: inputVal }));
						setInputVal("");

						// Now send the data to EMAIL
						dispatch(submitForm());
						console.log("Send it to the mail");
					}
					break;

				default:
					break;
			}
		} else {
			dispatch(nextInput());
			setInputVal("");
		}
	};

	useEffect(() => {
		//   Once loaded set the inputVal = state.forms.initialVal
		setInputVal(inputState);
	}, [inputState]);

	useEffect(() => {
		if (validForm === true) {
			toast.success(
				"Nous avons reçu votre demande, notre équipe vous contactera dès que possible."
			);
		} else if (validForm === false) {
			toast.error(
				"Une erreur s'est produite, veuillez réessayer de soumettre le formulaire."
			);
		}
	}, [validForm]);

	return (
		<div className="py-5 ps-md-5 position-relative" id="steps-show">
			<h5 className="question mb-4">
				<span className="fs-6">{activeStep + 1}-</span> {question}
			</h5>

			{inputName === "phone" || inputName === "email" ? (
				<Alert severity="info" className="mb-3">
					<h5>
						{formData.genre} {formData.name} d'après vos informations vous
						pouvez réaliser de belles économies sur votre facture d'électricité.
					</h5>
				</Alert>
			) : (
				""
			)}
			{/* Select */}
			{inputType === "select" ? (
				<div className="ps-5 row row-cols-1 flex-wrap gap-1">
					<AnimatePresence>
						{selectValues.map((opt) => (
							<motion.span
								exit={{ opacity: 0 }}
								onClick={() => dispatch(changeInput({ inputName, value: opt }))}
								key={selectValues.indexOf(opt)}
								className={`selectOption py-2 px-4 d-block ${
									typeof inputState === "object" &&
									inputState.includes(opt) &&
									"active"
								} ${inputState === opt && "active"}`}
								value={opt}
							>
								<span className="letter">
									{returnLetter(selectValues.indexOf(opt))}-{" "}
								</span>{" "}
								{opt}
							</motion.span>
						))}
					</AnimatePresence>
				</div>
			) : (
				<Input
					value={inputVal}
					onChange={({ target }) => setInputVal(target.value)}
					className="ms-5"
					placeholder="Remplissez-ici"
					margin="dense"
					color="warning"
					name={inputName}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleOk();
						}
					}}
				/>
			)}

			<motion.div
				className="ps-md-5"
				style={{ width: "min-content" }}
				whileTap={{ scale: 0.91 }}
				data-aos="fade-down"
			>
				<Button
					onClick={handleOk}
					className={`ms-auto my-5 d-block`}
					variant="contained"
					color={`${inputName !== "email" ? "warning" : "success"}`}
					id="ok"
				>
					Ok!
				</Button>
			</motion.div>
		</div>
	);
};

export default Step;
