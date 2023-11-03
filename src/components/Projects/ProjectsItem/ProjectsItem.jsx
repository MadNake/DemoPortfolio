import s from "./ProjectsItem.module.css"
import PropTypes from 'prop-types';

const ProjectsItem = (props) => {
	return (
		<li className={s.projects__item}>
			<img src={props.img} alt={`project ${props.id}`} />
			<a className={s.project__link} href=""><h3 className={s.projects__title}>{props.title}</h3></a>
		</li>
	)
}

ProjectsItem.propTypes = {
  title: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number,
};

export default ProjectsItem