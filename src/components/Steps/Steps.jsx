import "./Steps.css";
import AnimatedArrow from "../../img/ArrowAnimation.gif";

const Steps = () => {
	return (
		<section className="container-fluid py-5 m-0" id="steps">
			<div className="container-md my-5 m-0 mx-auto row row-cols-1 row-cols-md-2">
				<article className="text">
					<h1 className="text-end fw-bolder">
						Estimez vos futures économies d'énergie en quelques questions
					</h1>
					<div className="animatedArrow-wrapper text-end pe-3">
						<img src={AnimatedArrow} alt="Animation de Flèche" height={150} />
					</div>
				</article>
				<article id="steps-show"></article>
			</div>
		</section>
	);
};

export default Steps;
