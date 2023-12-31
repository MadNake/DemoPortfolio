import s from "./Projects.module.css"
import ProjectsItem from "./ProjectsItem/ProjectsItem"

const Projects = () => {

	const projects = [
		// {id: 0, title: "Gaming streaming portal", img: "/./DemoPortfolio/01.jpg"},
		{id: 0, title: "Landing Page", img: "/./DemoPortfolio/07.jpg"},
		{id: 1, title: "Landing Page", img: "/./DemoPortfolio/08.jpg"},
		{id: 2, title: "SPA Top 250 IMDB Films", img: "/./DemoPortfolio/09.jpg"},
		// {id: 3, title: "Dating app", img: "/./DemoPortfolio/04.jpg"},
		// {id: 4, title: "Landing", img: "/./DemoPortfolio/05.jpg"},
		// {id: 5, title: "Gaming community", img: "/./DemoPortfolio/06.jpg"},
	]

	return (
		<section className="container">
			<div className={s.projects__container}>
			<h2 className={s.title}>Projects</h2>
			<ul className={s.projects__list}>
			{projects.map(p => (
				<ProjectsItem key={p.id} title={p.title} img={p.img} id={p.id}/>
			))}
			</ul>
			</div>
		</section>
	)
}

export default Projects