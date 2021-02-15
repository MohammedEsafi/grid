import React from 'react';

const Zap = () => {
	return (
		<svg
			width={62}
			height={64}
			viewBox='0 0 62 58'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd)'>
				<path
					d='M32.4 14L18.4 30.8H31L29.6 42L43.6 25.2H31L32.4 14Z'
					stroke='#FFEAA7'
					strokeWidth={3}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd'
					x={-13}
					y={-12}
					width={88}
					height={88}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={8} />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.08 0'
					/>
					<feBlend mode='multiply' in2='BackgroundImageFix' result='effect1_dropShadow' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={3} />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.16 0'
					/>
					<feBlend mode='multiply' in2='effect1_dropShadow' result='effect2_dropShadow' />
					<feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
				</filter>
			</defs>
		</svg>
	);
};

export default Zap;
