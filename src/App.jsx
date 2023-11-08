import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navigate from "./components/Navigate/Navigate"
import Project from "./components/Project/Project"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

	const data = [
		{ id: 0, title: "Video service", img: "./videoService.png", skills: "React, Node.js, MongoDB" }
	]

	return (
		<div className={`app-wrapper`}>
			<Navigate />
			<Header />
			<main>
				<Projects />
				<Project {...data[0]} />
				<Skills />
				<Contacts />
			</main>
			<Footer />
		</div>
	)
}

export default App
