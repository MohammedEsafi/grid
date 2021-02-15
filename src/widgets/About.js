import React from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import { Emoji, Card } from '@components';
import { media } from '@styles';

const { breakpoints, fontSize } = config;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h3`
	font-weight: bold;
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xl, fontSize.xxl)};
	margin-bottom: 0;
`;

const SubTitle = styled.p`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.sm, fontSize.md)};
`;

const List = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;

	& > * {
		padding-top: 25px;
	}

	${media.tablet`
		grid-template-columns: 1fr 1fr;
	`}
`;

const About = () => {
	const data = [
		{
			iconName: 'Phone',
			color: '--pink-dark',
			title: 'Support',
			description:
				'Delivering faster and more personalized support with shared screens and cool design systems for Figma'
		},
		{
			iconName: 'Chart',
			color: '--blue-dark',
			title: 'Sales growth',
			description:
				'Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot'
		},
		{
			iconName: 'Zap',
			color: '--purple-dark',
			title: 'Coponents-driven',
			description:
				'Delivering faster and more personalized support with shared screens and cool design systems for Figma'
		},
		{
			iconName: 'ThumbsUp',
			color: '--green-dark',
			title: 'Swap the icon',
			description:
				'You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter'
		}
	];
	return (
		<Wrapper>
			<Title>
				Delivering good designs since 1954 {''}
				<Emoji symbol='🚚' />
				<Emoji symbol='💨' />
			</Title>
			<SubTitle>
				We’re the first multi-purpose design kit solutions for businesses. We help you bridge
				gaps between your layouts, templates and developers to empower all involved.
			</SubTitle>
			<List>
				{data.map((props, index) => (
					<Card key={index} {...props} />
				))}
			</List>
		</Wrapper>
	);
};

export default About;
