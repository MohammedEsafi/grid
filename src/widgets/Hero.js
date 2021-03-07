import React from 'react';
import styled from 'styled-components';
import { Nav, Grid } from '@components';
import config from '@config';
import { clamping } from '@utils';
import hero from '../images/hero.svg';

const { breakpoints, fontSize } = config;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	box-shadow: var(--dp2-box-shadow);
`;

const Background = styled.div`
	z-index: -1;
	background-size: contain;
	background-image: url(${hero});
	background-repeat: no-repeat;
	background-position: right top;
`;

const Content = styled.section`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - var(--nav-height));
`;

const Heading = styled.h1`
	font-size: ${clamping(
		breakpoints.phone,
		breakpoints.desktop,
		fontSize.heading - 2,
		fontSize.heading
	)};
	font-weight: 800;
	text-align: center;
	text-shadow: var(--white-text-shadow);
	margin-bottom: 0;

	& > .red {
		color: var(--red-dark);
		position: relative;

		&:after {
			content: '';
			width: 100%;
			height: 35%;
			background-color: var(--green-light);
			position: absolute;
			left: 0;
			bottom: 7%;
			z-index: -1;
			border-radius: var(--r-border-radius);
		}
	}
`;

const SubTitle = styled.h2`
	font-size: ${clamping(
		breakpoints.phone,
		breakpoints.desktop,
		fontSize.heading - 2.5,
		fontSize.heading - 1
	)};
	font-weight: 800;
	text-align: center;
	text-shadow: var(--white-text-shadow);
	margin: 0.5em 0 1.5em;
`;

const Hero = () => {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Background>
				<Content id='usage'>
					<Heading>
						Combine <span className='red'>fine</span> images
					</Heading>
					<SubTitle>To represent a product</SubTitle>
					<Grid />
				</Content>
			</Background>
		</>
	);
};

export default Hero;
