import s from "./Skills.module.css";

const Skills = () => {
	return (
		<section className="container">
			<div className={s.skills__container}>
				<h2 className={s.title}>Skills</h2>
				<div className={s.skill__wrapper}>
					<h3 className={s.subtitle}>Frontend</h3>
					<p className={s.text}>
						JavaScript, TypeScript, ReactJS, Redux, Zustand, HTML, CSS, SCSS,
						Tailwind CSS,
					</p>
				</div>
				<div className={s.skill__wrapper}>
					<h3 className={s.subtitle}>Backend</h3>
					<p className={s.text}>The list will continue to grow...</p>
				</div>
				<div className={s.skill__wrapper}>
					<h3 className={s.subtitle}>Development tools</h3>
					<p className={s.text}>ESLint, Prettier, Vite, GIT</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
