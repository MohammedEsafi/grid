import React from 'react';
import styled from 'styled-components';
import { Menu, Button, Brand } from '@components';
import { Link } from 'gatsby';
import { clamping } from '@utils';
import config from '@config';

const { breakpoints, fontSize, mainPadding } = config;

const StyledNav = styled.nav`
	--padding: ${clamping(breakpoints.phone, breakpoints.desktop, mainPadding.min, mainPadding.max)};
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: var(--nav-height);
	padding-left: var(--padding);
	padding-right: var(--padding);
	max-width: 1366px;
	width: 100%;
	margin: auto;
`;

const StyledLink = styled(Link)`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.md)};
	padding: 10px 15px;
	font-weight: bold;
	display: block;
`;

const Nav = () => {
	return (
		<StyledNav>
			<Brand />
			<Menu />
			<Button primary rounded>
				<StyledLink to='#'>Sign In</StyledLink>
			</Button>
		</StyledNav>
	);
};

export default Nav;
