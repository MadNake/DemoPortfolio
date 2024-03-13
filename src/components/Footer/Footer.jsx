import s from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={s.footer__container}>
			<ul className={s.social__list}>
				{/* <li className={s.social__item}><a href=""><img src="/./DemoPortfolio/vk.svg" alt="vk" /></a></li> */}
				{/* <li className={s.social__item}><a href=""><img src="/./DemoPortfolio/instagram.svg" alt="instagram" /></a></li> */}
				{/* <li className={s.social__item}><a href=""><img src="/./DemoPortfolio/twitter.svg" alt="twitter" /></a></li> */}
				<li className={s.social__item}>
					<a target="blank" href="https://github.com/MadNake">
						<img src="/./DemoPortfolio/gitHub.svg" alt="gitHub" />
					</a>
				</li>
				<li className={s.social__item}>
					<a
						target="blank"
						href="https://www.linkedin.com/in/maksym-usalko-215342243/"
					>
						<img src="/./DemoPortfolio/linkedIn.svg" alt="linkedIn" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
