/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,rs}', 'index.html'],

	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern':
					"linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('/assets/ws-panel.png')"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
	],
};
