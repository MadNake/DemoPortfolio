import s from "./Project.module.css";
import PropTypes from "prop-types";
import data from "../../db/projectsList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const { id } = useParams();
	const project = data[id];

	return (
		<section className="container">
			<div className={s.project__container}>
				<h2 className={s.title}>{project.title}</h2>
				<img className={s.img} src={project.img} alt="project img" />
				<p className={s.skills}>{`Skills: ${project.skills}`}</p>
				<a target="blank" className={s.gitHub__Link} href={`${project.href}`}>
					<img
						className={s.gitHub__icon}
						src="/./DemoPortfolio/web-icon.svg"
						alt="web icon"
					/>
					WEB-page
				</a>
				<a
					target="blank"
					className={s.gitHub__Link}
					href={`${project.gitHubSrc}`}
				>
					<img
						className={s.gitHub__icon}
						src="/./DemoPortfolio/gitHub_black.svg"
						alt="gitHub icon"
					/>
					GitHub repo
				</a>
			</div>
		</section>
	);
};

Project.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	skills: PropTypes.string,
};

export default Project;
