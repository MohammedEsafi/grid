import React from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import { Link } from 'gatsby';
import { media } from '@styles';

const { breakpoints, fontSize } = config;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
	color: var(--black);

	& > a {
		width: 33%;
		padding-right: 5px;
		margin-bottom: 25px;

		${media.phone`
			width: 50%;
		`}

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Info = () => {
	const links = [
		{
			name: 'About Fapster app',
			url: '#'
		},
		{
			name: 'Onhovered / Active',
			url: '#'
		},
		{
			name: 'We are hiring!',
			url: '#'
		},
		{
			name: 'Get in Touch',
			url: '#'
		},
		{
			name: 'Privacy Policy',
			url: '#'
		},
		{
			name: 'Resources',
			url: '#'
		},
		{
			name: 'Things We Like',
			url: '#'
		},
		{
			name: 'Terms of Service',
			url: '#'
		}
	];

	return (
		<Wrapper>
			{links?.map(({ name, url }, index) => (
				<Link to={url} key={index}>
					{name}
				</Link>
			))}
		</Wrapper>
	);
};

export default Info;
