/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				trailer: {
					'white-100': '#f5f5f5',
					'black-100': '#1F3B4D',
					'grey-100': '#121212',
					'grey-150': '#cccccc',
					'grey-200': '#333333',
					'grey-300': '#214761',
					'grey-400': '#1F3B4D',
					'grey-500': '#D8DCD6',
					'grey-600': '#9DBCD4',
					'grey-700': '#D8D8D8',
					'grey-800': '#9C9C9C',
					'grey-900': 'rgba(255, 255, 255, 0.20)',
					'crimson-100': '#E50914',
					'ice-100': '#BDF6FE',
					'gold-100': '#FED700',
					'gold-200': '#FCB005',
					'gold-300': '#d4a574',
					'gold-400': '#FFAB0F',
					'blue-100': '#4169F1',
					'blue-200': '#247AFD',
					'red-100': '#B22229',
					'light-purple': '#C1C6FC'
				}
			}
		}
	},
	plugins: []
}
