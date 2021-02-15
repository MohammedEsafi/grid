import { createGlobalStyle } from 'styled-components';
import { clamping } from '@utils';
import config from '@config';

const { breakpoints, fontSize, mainPadding } = config;

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

		--padding: ${clamping(breakpoints.phone, breakpoints.desktop, mainPadding.min, mainPadding.max)};
		--border-radius: 12px;
		--r-border-radius: 20px;
		--nav-height: 70px;

		--dp2-box-shadow: 0 1px 3px rgba(38, 50, 56, 0.16), 0 2px 6px rgba(38, 50, 56, 0.08);
		--white-text-shadow: 0 0.07em var(--white);
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
		min-height: 100vh;
		font-family: var(--font);
		background-color: var(--white);
	}

	a,
	a:visited,
	a:active,
	a:focus {
		text-decoration: none;
		color: inherit;
	}

	section {
		padding-left: var(--padding);
		padding-right: var(--padding);
		padding-top: 30px;
		padding-bottom: 70px;
	}
 
	p, h1, h2, h3, h4 {
		color: var(--black);
	}

	p {
		line-height: 2em;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
	}
`;

export default GlobalStyle;
