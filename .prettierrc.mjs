/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	quoteProps: 'consistent',
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	endOfLine: 'lf',
	arrowParens: 'always',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
