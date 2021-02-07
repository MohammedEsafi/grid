import React from 'react';
import styled from 'styled-components';
import { Menu } from '@components';

const Header = styled.header`
	display: flex;
	flex-direction: column;
`;

const Hero = () => {
	return (
		<Header>
			<Menu />
		</Header>
	);
};

export default Hero;
