import { Routes, Route } from "react-router-dom";

import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Navigate from "./components/Navigate/Navigate";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";

function App() {
	return (
		<div className={`app-wrapper`}>
			<Navigate />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
