import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--white: #FFFFFF;
		--black: #36352D;
		--gray-dark: #5C5C5C;
		--gray: #858585;
		--gray-light: #ADADAD;
		--gray-soft: #C2C2C2;
		--blue-dark: #0984E3;
		--blue-light: #74B9FF;
		--green-dark: #00B894;
		--green-light: #55EFC4;
		--yellow-dark: #FDCB6E;
		--yellow-light: #FFEAA7;
		--red-dark: #D63031;
		--red-light: #FF7675;
		--purple-dark: #6C5CE7;
		--purple-light: #A29BFE;
		--pink-dark: #E84393;
		--pink-light: #FD79A8;

		--font: 'Inter', sans-serif;
	}

	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		width: 100%;
		min-height: 100%;
		font-family: var(--font);
	}
`;

export default GlobalStyle;
