import s from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={s.footer__container}>
			<ul className={s.social__list}>
				<li className={s.social__item}><a href=""><img src="public/vk.svg" alt="vk" /></a></li>
				<li className={s.social__item}><a href=""><img src="public/instagram.svg" alt="instagram" /></a></li>
				<li className={s.social__item}><a href=""><img src="public/twitter.svg" alt="twitter" /></a></li>
				<li className={s.social__item}><a href=""><img src="public/gitHub.svg" alt="gitHub" /></a></li>
				<li className={s.social__item}><a href=""><img src="public/linkedIn.svg" alt="linkedIn" /></a></li>
			</ul>
			<p className={s.footer__text}>© 2022 frontend-dev.com</p>
		</footer>
	)
}

export default Footer