import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./config/store";
import "react-toastify/dist/ReactToastify.css";

AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
