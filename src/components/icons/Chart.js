import React from 'react';

const Chart = () => {
	return (
		<svg
			width={64}
			height={64}
			viewBox='0 0 64 58'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd)'>
				<path
					d='M44.8946 33.4461C44.0039 35.5524 42.6109 37.4084 40.8372 38.8519C39.0635 40.2954 36.9632 41.2825 34.72 41.7268C32.4767 42.1711 30.1588 42.0591 27.9688 41.4006C25.7788 40.7421 23.7834 39.5572 22.1572 37.9494C20.5309 36.3416 19.3233 34.36 18.6399 32.1776C17.9564 29.9953 17.818 27.6788 18.2366 25.4306C18.6553 23.1824 19.6183 21.071 21.0414 19.281C22.4646 17.4909 24.3046 16.0768 26.4006 15.1621'
					stroke='#FFEAA7'
					strokeWidth={3}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M46.0006 28C46.0006 26.1615 45.6385 24.341 44.9349 22.6424C44.2314 20.9439 43.2001 19.4005 41.9001 18.1005C40.6001 16.8005 39.0567 15.7693 37.3582 15.0657C35.6596 14.3621 33.8391 14 32.0006 14V28H46.0006Z'
					stroke='#FFEAA7'
					strokeWidth={3}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd'
					x={-12}
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

export default Chart;
