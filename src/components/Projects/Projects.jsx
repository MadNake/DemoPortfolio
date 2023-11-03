import s from "./Projects.module.css"
import ProjectsItem from "./ProjectsItem/ProjectsItem"

const Projects = () => {

	const projects = [
		{id: 0, title: "Gaming streaming portal", img: "./01.jpg"},
		{id: 1, title: "Video service", img: "./02.jpg"},
		{id: 2, title: "Video portal", img: "./03.jpg"},
		{id: 3, title: "Dating app", img: "./04.jpg"},
		{id: 4, title: "Landing", img: "./05.jpg"},
		{id: 5, title: "Gaming community", img: "./06.jpg"},
	]

	return (
		<section className={s.projects__container}>
			<h2 className={s.title}>Projects</h2>
			<ul className={s.projects__list}>
			{projects.map(p => (
				<ProjectsItem key={p.id} title={p.title} img={p.img} id={p.id}/>
			))}
			</ul>
		</section>
	)
}

export default Projects