/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Montserrat", "sans-serif"],
				secondary: ["NTR", "sans-serif"],
			},
			colors: {
				primary: "#03CA7E",
				secondary: {
					50: "#f8f8f8",
					100: "#f1f1f1",
					200: "#dcdcdc",
					300: "#bdbdbd",
					400: "#989898",
					500: "#7c7c7c",
					600: "#656565",
					700: "#525252",
					800: "#464646",
					900: "#3d3d3d",
					950: "#292929",
				},
			},
		},
	},
	plugins: [],
};
