import React, { Fragment } from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import { Social, Info, Contact } from '@components';
import { media } from '@styles';
import wave from '../images/wave.svg';
const { breakpoints, fontSize } = config;

const Wrapper = styled.footer`
	display: grid;
	width: 100%;
	gap: 10px;
	padding-left: var(--padding);
	padding-right: var(--padding);
	padding-top: 30px;
	padding-bottom: 70px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto);
	max-width: 1366px;
	margin: 0 auto;

	${media.tablet`
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		gap: 20px;
	`}
`;

const Title = styled.h1`
	text-transform: uppercase;
	color: var(--gray-light);
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xxs, fontSize.xs)};
	margin-bottom: 25px;
`;

const Link = styled.a`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.md, fontSize.lg)};
	color: var(--purple-dark);
	font-weight: bold;

	&:focus {
		color: var(--purple-dark);
	}
`;

const Footer = () => {
	return (
		<>
			<Wrapper>
				<div>
					<Title>follow us</Title>
					<Social />
				</div>
				<div>
					<Title>email us</Title>
					<Link href='mailto:hello@mesafi.com'>hello@mesafi.com</Link>
				</div>
				<div>
					<Title>information</Title>
					<Info />
				</div>
				<div>
					<Title>keep in touch</Title>
					<Contact />
				</div>
			</Wrapper>
			<img alt='' src={wave} />
		</>
	);
};

export default Footer;
