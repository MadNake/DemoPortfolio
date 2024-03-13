import s from "./Projects.module.css";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import data from "../../db/projectsList";

const Projects = () => {
	const projects = data;

	return (
		<section className="container">
			<div className={s.projects__container}>
				<h2 className={s.title}>Projects</h2>
				<ul className={s.projects__list}>
					{projects.map((p) => (
						<ProjectsItem
							key={p.id}
							title={p.prevTitle}
							img={p.img}
							id={p.id}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
