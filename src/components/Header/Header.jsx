import s from "./Header.module.css"

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__wrapper}>
				<h1 className={s.header__title}>
					<strong>Hi, my name is
						<span className={s.name}> Maksym Usalko</span>
					</strong><br />
					a frontend developer
				</h1>
				<div className={s.header__text}>
					<p>with passion for learning and creating.</p>
				</div>
				<a className="btn" href="/./DemoPortfolio/Lebenslauf von Maksym Usalko.pdf" target="blank">Download CV</a>
			</div>
		</header>
	)
}

export default Header