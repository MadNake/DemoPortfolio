import s from "./Contacts.module.css"

const Contacts = () => {
	return (
		<section className={s.contacts__container}>
			<h1 className={s.title}>Contacts</h1>
			<div className={s.block__wrapper}>
				<h2 className={s.subtitle}>Location</h2>
				<p className={s.text}>Deutschland, Bopfingen</p>
			</div>
			<div className={s.block__wrapper}>
				<h2 className={s.subtitle}>Telegram / WhatsApp</h2>
				<p className={s.text}>+49 1341241525124</p>
			</div>
			<div className={s.block__wrapper}>
				<h2 className={s.subtitle}>Email</h2>
				<p className={s.text}>maks.usalko@gmail.com</p>
			</div>
		</section>
	)
}

export default Contacts