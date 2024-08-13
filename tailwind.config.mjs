/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pearl-lusta': {
					50: '#fcf8ee',
					100: '#f9f1dc',
					200: '#eed799',
					300: '#e5bd64',
					400: '#dea641',
					500: '#d6892a',
					600: '#bd6922',
					700: '#9d4d20',
					800: '#803d20',
					900: '#6a331d',
					950: '#3c190c',
				},
			},
		},
	},
	plugins: [],
}
