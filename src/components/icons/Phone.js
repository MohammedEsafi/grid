import React from 'react';

const Phone = () => {
	return (
		<svg
			width={65}
			height={65}
			viewBox='0 0 65 58'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd)'>
				<path
					d='M36.1134 19.6C37.4808 19.8668 38.7375 20.5356 39.7227 21.5207C40.7078 22.5059 41.3766 23.7626 41.6434 25.13M36.1134 14C38.9543 14.3156 41.6036 15.5878 43.6261 17.6078C45.6486 19.6278 46.9242 22.2754 47.2434 25.116M45.8434 36.288V40.488C45.8449 40.8779 45.7651 41.2638 45.6089 41.6211C45.4527 41.9783 45.2236 42.299 44.9363 42.5626C44.649 42.8262 44.3098 43.0269 43.9404 43.1518C43.5711 43.2767 43.1797 43.3231 42.7914 43.288C38.4833 42.8199 34.3452 41.3478 30.7094 38.99C27.3267 36.8405 24.4588 33.9726 22.3094 30.59C19.9433 26.9377 18.4709 22.7794 18.0114 18.452C17.9764 18.0649 18.0224 17.6747 18.1465 17.3063C18.2705 16.9379 18.47 16.5994 18.732 16.3123C18.9941 16.0252 19.3131 15.7958 19.6687 15.6387C20.0243 15.4817 20.4086 15.4004 20.7974 15.4H24.9974C25.6768 15.3933 26.3355 15.6339 26.8506 16.0769C27.3658 16.52 27.7023 17.1352 27.7974 17.808C27.9746 19.1521 28.3034 20.4718 28.7774 21.742C28.9657 22.2431 29.0065 22.7877 28.8948 23.3112C28.7832 23.8348 28.5238 24.3154 28.1474 24.696L26.3694 26.474C28.3623 29.979 31.2644 32.881 34.7694 34.874L36.5474 33.096C36.928 32.7196 37.4086 32.4602 37.9321 32.3485C38.4557 32.2369 39.0003 32.2776 39.5014 32.466C40.7715 32.94 42.0913 33.2687 43.4354 33.446C44.1154 33.5419 44.7365 33.8845 45.1805 34.4085C45.6245 34.9325 45.8604 35.6014 45.8434 36.288Z'
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

export default Phone;
