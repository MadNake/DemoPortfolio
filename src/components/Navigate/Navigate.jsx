import s from "./Navigate.module.css"
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";

// const setActive = ({isActive}) => isActive ? `${s.active} ${s.link}` : s.link;

const Navigate = () => {

	return (
		<nav className={s.nav}>
				<div className={s.nav__row}>
					<a href="#" className={s.logo}><strong>Freelancer</strong> portfolio</a>
					<ul className={s.nav__list}>
						<li><a className={`${s.link} ${s.active}`} href="#">Projects</a></li>
						<li><a className={s.link} href="#">Skills</a></li>
						<li><a className={s.link} href="#">Contacts</a></li>
					</ul>
					<DarkModeBtn />
				</div>
		</nav>
	)
}

export default Navigate;