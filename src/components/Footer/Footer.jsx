import "./Footer.css";

const Footer = () => {
	return (
		<footer className="container-fluid d-md-flex py-4 text-light">
			<div className="container">
				<div className="me-md-auto text-center text-md-start">
					<div className="copyright">
						&copy; Copyright{" "}
						<strong>
							<span>Batterie+ Solaire</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className="credits">
						Designed by{" "}
						<a href="https://solairebatterie.fr/" className="text-light">batterie+ Solaire</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
