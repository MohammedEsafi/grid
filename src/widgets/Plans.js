import React from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import { Plan } from '@components';

const { breakpoints, fontSize } = config;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: ${clamping(
		breakpoints.phone,
		breakpoints.desktop,
		fontSize.heading - 2.5,
		fontSize.heading - 1
	)};
	font-weight: 800;
	text-align: center;
	text-shadow: var(--white-text-shadow);
	margin-bottom: 0;
`;

const SubTitle = styled.h3`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xl, fontSize.xxl)};
	font-weight: 800;
	text-align: center;
	color: var(--gray-light);

	& > span {
		color: var(--purple-dark);
		position: relative;

		&:after {
			content: '';
			width: 100%;
			height: 30%;
			background-color: var(--yellow-dark);
			position: absolute;
			left: 0;
			bottom: 7%;
			z-index: -1;
			border-radius: var(--r-border-radius);
		}
	}
`;

const List = styled.div`
	display: flex;
	margin-top: 15px;
	flex-wrap: wrap;
`;

const Plans = () => {
	const data = [
		{
			title: 'Like a pussy',
			price: 'Free',
			duration: 'forever',
			feature: [
				'Components-driven system',
				'Sales-boosting landing pages',
				'Awesome Feather icons pack'
			],
			buttonText: 'Try for free',
			best: false,
			color: '--gray-soft'
		},
		{
			title: 'Individual',
			price: '$24',
			duration: 'month',
			feature: [
				'Components-driven system',
				'Sales-boosting landing pages',
				'Awesome Feather icons pack',
				'Themed into 3 different styles',
				'Will help to learn Figma'
			],
			buttonText: 'Regular license',
			best: true,
			color: '--yellow-dark'
		},
		{
			title: 'Corporate',
			price: '$12',
			duration: 'editor',
			feature: [
				'Components-driven system',
				'Sales-boosting landing pages',
				'Awesome Feather icons pack',
				'Themed into 3 different styles'
			],
			buttonText: 'Extended license',
			best: false,
			color: '--green-light'
		}
	];
	return (
		<Wrapper>
			<Title>Affordable pricing</Title>
			<SubTitle>
				Bill me <span>monthly</span> • yearly
			</SubTitle>
			<List>
				{data.map((props, index) => (
					<Plan {...props} key={index} />
				))}
			</List>
		</Wrapper>
	);
};

export default Plans;
