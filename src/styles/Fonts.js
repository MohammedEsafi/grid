import { css } from 'styled-components';

import InterThin from '@fonts/Inter/Inter-Thin.ttf';
import InterExtraLight from '@fonts/Inter/Inter-ExtraLight.ttf';
import InterLight from '@fonts/Inter/Inter-Light.ttf';
import InterRegular from '@fonts/Inter/Inter-Regular.ttf';
import InterMedium from '@fonts/Inter/Inter-Medium.ttf';
import InterSemiBold from '@fonts/Inter/Inter-SemiBold.ttf';
import InterBold from '@fonts/Inter/Inter-Bold.ttf';
import InterExtraBold from '@fonts/Inter/Inter-ExtraBold.ttf';
import InterBlack from '@fonts/Inter/Inter-Black.ttf';

const Inter = {
	'100': InterThin,
	'200': InterExtraLight,
	'300': InterLight,
	'400': InterRegular,
	'500': InterMedium,
	'600': InterSemiBold,
	'700': InterBold,
	'800': InterExtraBold,
	'900': InterBlack
};

const Fonts = css`
	${Object.entries(Inter).reduce((accumulator, [weight, url]) => {
		accumulator += `
			@font-face {
				font-family: 'Inter';
				font-style: normal;
				font-weight: ${weight};
				font-display: swap;
				src: url(${url}) format('ttf');
			}
		`;

		return accumulator;
	}, '')}
`;

export default Fonts;
