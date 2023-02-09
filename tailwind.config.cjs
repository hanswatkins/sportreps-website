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
				'gotbag': "url('/src/assets/got-bag.jpg')",
				'haflinger': "url('/src/assets/haflinger.jpg')",
				'point6': "url('/src/assets/point6.jpeg')",
				'velous': "url('/src/assets/velous.jpg')",
				'wolky': "url('/src/assets/wolky.jpg')",
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
