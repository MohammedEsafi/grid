export const hex2rgba = (hex, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));

	return `rgba(${r},${g},${b},${alpha})`;
};

// Takes the viewport widths in em and the font sizes in rem
export const clamping = (minWidth, maxWidth, minFontSize, maxFontSize) => {
	const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
	const intersection = -minWidth * slope + minFontSize;

	return `clamp( ${minFontSize}rem, ${intersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`;
};

export const getRefElement = (element) => {
	return element?.current ?? element;
};

export const isSSR = () => typeof window === 'undefined';
