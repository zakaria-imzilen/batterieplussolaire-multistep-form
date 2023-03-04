import "./Steps.css";
import AnimatedArrow from "../../img/ArrowAnimation.gif";
import Step from "./Step";

const Steps = () => {
	return (
		<section className="container-fluid py-5 m-0" id="steps">
			<div className="container-md my-5 m-0 mx-auto row row-cols-1 row-cols-md-2 flex-md-nowrap gap-md-3 align-items-center">
				<article className="text" data-aos="fade-left">
					<h1 className="text-end fw-bolder">
						Estimez vos futures économies d'énergie en quelques questions
					</h1>
					<div className="animatedArrow-wrapper text-end pe-3">
						<img src={AnimatedArrow} alt="Animation de Flèche" height={150} />
					</div>
				</article>
				<Step />
			</div>
		</section>
	);
};

export default Steps;
