import React from 'react';
import { Layout } from '@components';
import styled from 'styled-components';
import { Hero, About, Plans } from '@widgets';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const IndexPage = () => {
	return (
		<Layout>
			<StyledMain>
				<Hero />
				<About />
				<Plans />
			</StyledMain>
		</Layout>
	);
};

export default IndexPage;
