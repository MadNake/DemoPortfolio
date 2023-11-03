

const useDarkMode = () => {
	let darkMode = localStorage.getItem("darkMode");

	if (darkMode === true) {
		return "dark-mode"
	} else {
		return " " 
	}
}

export default useDarkMode