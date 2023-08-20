/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				trailer: {
					'black-100': '#1F3B4D',
					'grey-100': '#121212',
					'grey-200': '#333333',
					'grey-300': '#214761',
					'grey-400': '#1F3B4D',
					'grey-500': '#D8DCD6',
					'crimson-100': '#E50914',
					'gold-100': '#FED700',
					'gold-200': '#FCB005',
					'blue-100': '#4169F1',
					'red-100': '#B22229'
				}
			}
		}
	},
	plugins: []
}
