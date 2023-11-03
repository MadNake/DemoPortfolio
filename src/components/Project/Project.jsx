import s from "./Project.module.css"
import PropTypes from 'prop-types';

const Project = ({ title, img, skills }) => {
	console.log()
	return (

		<section className="container">
			<div className={s.project__container}>
				<h2 className={s.title}>{title}</h2>
				<img className={s.img} src={img} alt="project img" />
				<p className={s.skills}>{`Skills: ${skills}`}</p>
				<a className={s.gitHub__Link} href="#">
					<img className={s.gitHub__icon} src="public/gitHub_black.svg" alt="gitHub icon" />
					GitHub repo
				</a>
			</div>
		</section>
	)
}

Project.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	skills: PropTypes.string,
};

export default Project