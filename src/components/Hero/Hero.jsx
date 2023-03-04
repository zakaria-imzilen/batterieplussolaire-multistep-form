import { Button } from "@mui/material";
import "./Hero.css";
import CallIcon from "@mui/icons-material/Call";

const Hero = () => {
	return (
		<header data-aos="fade-down-left" className="container-fluid py-4 m-0">
			<div id="content" className="container-md mx-md-auto py-5">
				<h1 className="mb-4 fw-bold mx-md-auto">
					Domotique photovoltaïque: est-ce que ça vaut le coup ?
				</h1>
				<p className="mx-md-auto">
					La domotique photovoltaïque permet d’allumer vos appareils électriques
					quand vos panneaux produisent. Je vous dis si c’est vraiment rentable.
				</p>
				<Button
					className="mt-3 shadow-lg"
					startIcon={<CallIcon />}
					variant="outlined"
					color="warning"
				>
					Nous appeler 04 00 00 00 00
				</Button>
			</div>
		</header>
	);
};

export default Hero;
