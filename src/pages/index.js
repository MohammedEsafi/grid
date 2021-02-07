import React from 'react';
import { Layout } from '@components';
import styled from 'styled-components';
import { Hero } from '@widgets';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const IndexPage = () => {
	return (
		<Layout>
			<StyledMain>
				<Hero />
			</StyledMain>
		</Layout>
	);
};

export default IndexPage;
