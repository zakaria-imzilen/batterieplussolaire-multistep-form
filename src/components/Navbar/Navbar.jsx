import "./Navbar.css";
import logo from "../../img/Logo.png";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

const Navbar = () => {
	return (
		<nav className="container-fluid p-0 m-0 position-stiky top-0 shadow">
			<div className="container-md px-2 px-md-0 m-0 mx-auto row row-cols-2 justify-content-between align-items-center">
				<div className="logo text-start">
					<img src={logo} height={90} alt="Logo de Batterie Plus Solaire" />
				</div>
				<div className="ctas text-end">
					<span className="d-none d-md-inline me-5">Call Now</span>
					<Button startIcon={<CallIcon />} variant="outlined" color="warning">
						04 90 66 41 12
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
