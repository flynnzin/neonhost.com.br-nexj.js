const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
	theme: {
		extend: {
			animation: {
				"bounce-y": "bounceY 3s linear infinite",
			},
			keyframes: {
				bounceY: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
			colors: {
				"accent-primary": "#ec4899",
				"background-dark": "#0A0C10",
				"cards-dark": "#0d1016",
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
		},
	},
	darkMode: ["class"],
	plugins: [nextui()],
};
