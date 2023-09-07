import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
	setThemeToDark: () => void;
	setThemeToLight: () => void;
	setThemeToSystem: () => void;
};

type ThemeProviderType = {
	children: React.ReactNode;
};

const ThemeContext = createContext({} as ThemeContextType);
export const ThemeProvider = ({ children }: ThemeProviderType) => {
	const [theme, setTheme] = useState("system");

	const toggleTheme = () => {
		if (theme === "light") {
			localStorage.theme = "dark";
			setTheme("dark");
		} else {
			localStorage.theme = "light";
			setTheme("light");
		}
	};

	const setThemeToDark = () => {
		localStorage.theme = "dark";
		setTheme("dark");
	};

	const setThemeToLight = () => {
		localStorage.theme = "light";
		setTheme("light");
	};

	const setThemeToSystem = () => {
		localStorage.removeItem("theme");
		setTheme("system");
	};

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
				setThemeToDark,
				setThemeToLight,
				setThemeToSystem,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
export const useTheme = () => useContext(ThemeContext);
