import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Steps from "./components/Steps/Steps";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Steps />
			<ToastContainer />
		</div>
	);
}

export default App;
