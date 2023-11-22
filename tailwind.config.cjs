/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f2f4f3',
				dark: {
					DEFAULT: '#22333b',
				},
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
