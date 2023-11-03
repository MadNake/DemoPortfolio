import { useEffect, useRef } from "react"
import s from "./DarkModeBtn.module.css"
import { useLocalStorage } from "../../utils/useLocalStorage";

const DarkModeBtn = () => {

	const btnRef = useRef(null)

	const [darkMode, setDarkMode] = useLocalStorage(
		'darkMode',
		false
	)

	useEffect(() => {
		btnRef.current.classList.toggle(`${s.darkModeButton_active}`, darkMode);
		document.body.classList.toggle(`dark-mode`, darkMode);
	}, [darkMode])


	const changeDarkMode = () => {
		setDarkMode(currentValue => !currentValue)
	}


	return (
		<button id="bt" ref={btnRef} onClick={changeDarkMode} className={s.darkModeButton}>
			<img src="./sun.svg" alt="Light Mode" className={s.darkModeButton__icon} />
			<img src="./moon.svg" alt="Dark Mode" className={s.darkModeButton__icon} />
		</button>
	)
}

export default DarkModeBtn