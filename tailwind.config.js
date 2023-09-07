/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["Courgette", "cursive"],
			sans: ["Fira Sans", "sans-serif"],
			mono: ["Fira Code", "monospace"],
		},
		extend: {
			colors: {
				"polar-night-10": "#2E3440",
				"polar-night-20": "#3B4252",
				"polar-night-30": "#434C5E",
				"snow-storm-10": "#D8DEE9",
				"snow-storm-20": "#E5E9F0",
				"snow-storm-30": "#ECEFF4",
				"aurora-blue": "#88C0D0",
				"aurora-red": "#BF616A",
				"aurora-yellow": "#EBCB8B",
				"aurora-gren": "#A3BE8C",
				"brand-primary": "#FFAB88",
				"brand-secondary": "#FF8B7C",
			},
		},
	},
	plugins: [],
};
