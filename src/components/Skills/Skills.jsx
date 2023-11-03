import s from "./Skills.module.css"

const Skills = () => {
	return (
		<section className={s.skills__container}>
			<h2 className={s.title}>Skills</h2>
			<div className={s.skill__wrapper}>
				<h3 className={s.subtitle}>Frontend</h3>
				<p className={s.text}>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
			</div>
			<div className={s.skill__wrapper}>
				<h3 className={s.subtitle}>Backend</h3>
				<p className={s.text}>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
			</div>
		</section>
	)
}

export default Skills