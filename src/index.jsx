import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/main.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router basename={import.meta.env.BASE_URL}>
			<App />
		</Router>
	</React.StrictMode>,
);
