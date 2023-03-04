import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, nextInput } from "../../features/StepsSlice";
import "./Step.css";

const Step = ({
	inputName,
	index,
	question,
	inputType,
	validationName,
	selectValues,
}) => {
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

	const dispatch = useDispatch();
	const inputState = useSelector((state) => state.steps.formValues[inputName]);

	const [inputVal, setInputVal] = useState("");

	const handleOk = () => {
		if (inputType === "text") {
			switch (validationName) {
				case "address":
					if (inputVal) {
					}

				default:
					break;
			}
		} else {
			dispatch(nextInput());
		}
	};

	return (
		<div className="py-5 ps-md-5" id="steps-show">
			<h5 className="question mb-4">
				<span className="fs-6">{index}-</span> {question}
			</h5>
			{/* Select */}
			{inputType === "select" ? (
				<div className="ps-5 row row-cols-1 flex-wrap gap-1">
					{selectValues.map((opt) => (
						<span
							onClick={() => dispatch(changeInput({ inputName, value: opt }))}
							key={selectValues.indexOf(opt)}
							className="selectOption py-2 px-4 d-block"
							value={opt}
						>
							<span className="letter">
								{returnLetter(selectValues.indexOf(opt))}-{" "}
							</span>{" "}
							{opt}
						</span>
					))}
				</div>
			) : (
				<Input
					value={inputVal}
					onChange={({ target }) => setInputVal(target.value)}
					className="ms-5"
					placeholder="Remplissez-ici"
					margin="dense"
				/>
			)}

			<Button
				onClick={handleOk}
				className="ms-auto ms-md-5 my-5 d-block"
				variant="contained"
				color="success"
			>
				Ok!
			</Button>
		</div>
	);
};

export default Step;
