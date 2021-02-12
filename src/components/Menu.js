import React from 'react';
import styled from 'styled-components';
import config from '@config';
import { Link } from 'gatsby';
import { clamping } from '@utils';
import { media } from '@styles';

const { breakpoints, fontSize } = config;

const List = styled.ul`
	display: flex;
	justify-content: center;
	flex: 1;
	margin: 0;
	padding: 0;

	${media.tablet`
		display: none;
	`}
`;

const Item = styled.li`
	list-style: none;
	color: var(--purple-dark);

	& > a {
		display: flex;
		align-items: center;
		font-size: ${clamping(breakpoints.tablet, breakpoints.desktop, fontSize.sm, fontSize.md)};
	}

	&:not(:last-child) a:after {
		content: '';
		display: block;
		position: relative;
		width: 5px;
		height: 5px;
		margin: 0 15px;
		border-radius: 100%;
		background-color: var(--yellow-dark);
	}
`;

const Menu = () => {
	const { navLinks } = config;

	return (
		<List>
			{navLinks.map(({ name, url }, index) => (
				<Item key={index}>
					<Link to={url}>{name}</Link>
				</Item>
			))}
		</List>
	);
};

export default Menu;
