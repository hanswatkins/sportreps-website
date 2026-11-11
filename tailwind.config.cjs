/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				0.3: '1px',
				'3/4-screen': '75vh',
				'1/2-screen': '70vh',
			},
			fontFamily: {
				header: ['aktiv-grotesk', 'sans-serif'],
				body: ['aktiv-grotesk'],
				thin: ['aktiv-grotesk-thin'],
			},
			backgroundImage: {
				arntsonMarine: "url('/src/assets/arntsonmarine-hero.png')",
				boreal: "url('/src/assets/boreal.jpg')",
				gruezi: "url('/src/assets/gruezi.jpg')",
				haflinger: "url('/src/assets/haflinger.jpg')",
				point6: "url('/src/assets/point6.jpeg')",
				redback: "url('/src/assets/redback.jpg')",
				taho: "url('/src/assets/tahohero.jpg')",
				chillAngel: "url('/src/assets/chillangel-bottoms.jpg')",
				kurt: "url('/src/assets/aboutphoto3_new.jpg')",
				vibae: "url('/src/assets/vibae-hero2.jpeg')",
			},
			margin: {
				22: '5.5rem',
				36: '9.24rem',
				46: '12rem',
			},
		},
	},
	plugins: [],
};
