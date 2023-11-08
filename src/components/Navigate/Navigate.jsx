import s from "./Navigate.module.css"
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import { NavLink } from "react-router-dom";

// const setActive = ({isActive}) => isActive ? `${s.active} ${s.link}` : s.link;

const Navigate = () => {

	const isActive = ({ isActive }) => (isActive ? `${s.active} ${s.link}` : `${s.link}`)

	return (
		<nav className={s.nav}>
				<div className={s.nav__row}>
					<NavLink to={"/"} className={s.logo}><strong>Freelancer</strong> portfolio</NavLink>
					<ul className={s.nav__list}>
						<li><NavLink className={isActive} to={"/"}>Projects</NavLink></li>
						<li><NavLink className={isActive} to={"/skills"}>Skills</NavLink></li>
						<li><NavLink className={isActive} to={"/contacts"}>Contacts</NavLink></li>
					</ul>
					<DarkModeBtn />
				</div>
		</nav>
	)
}

export default Navigate;