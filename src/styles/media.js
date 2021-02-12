import { css } from 'styled-components';
import config from '@config';

const { breakpoints } = config;

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}em) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export default media;
