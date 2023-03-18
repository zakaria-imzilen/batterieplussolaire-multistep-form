import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Steps from "./components/Steps/Steps";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Steps />
			<Footer />
			<ToastContainer />
		</div>
	);
}

export default App;
