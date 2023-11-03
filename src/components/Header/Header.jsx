import s from "./Header.module.css"

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__wrapper}>
				<h1 className={s.header__title}>
					<strong>Hi, my name is
						<span className={s.name}> Max</span>
					</strong><br />
					a frontend developer
				</h1>
				<div className={s.header__text}>
					<p>with passion for learning and creating.</p>
				</div>
				<button className="btn">Download CV</button>
			</div>
		</header>
	)
}

export default Header