/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				0.3: '1px',
			},
			fontFamily: {
				header: ['aktiv-grotesk', 'sans-serif'],
				body: ['aktiv-grotesk'],
				thin: ['aktiv-grotesk-thin'],
			},
			backgroundImage: {
				'backpackers': "url('/src/assets/backpackers-pantry.jpg')",
				'boreal': "url('/src/assets/boreal.jpg')",
			},
			margin: {
				'22': '5.5rem',
				'36': '9.24rem',
				'46': '12rem',
			}
		},
	},
	plugins: [],
};
