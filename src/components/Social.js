import React from 'react';
import Icons from '@components/icons';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;

	& > div:not(:last-child) {
		margin-right: 25px;
	}
`;

const IconContainer = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: var(--yellow-light);
		border-radius: 50%;
	}

	& > a {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
`;

const Social = () => {
	const socialLinks = [
		{
			name: 'Facebook',
			url: '#'
		},
		{
			name: 'Linkedin',
			url: '#'
		},
		{
			name: 'Slack',
			url: '#'
		},
		{
			name: 'Twitter',
			url: '#'
		}
	];

	return (
		<Wrapper>
			{socialLinks?.map(({ name, url }, index) => (
				<IconContainer key={index}>
					<Link to={url}>
						<Icons name={name} />
					</Link>
				</IconContainer>
			))}
		</Wrapper>
	);
};

export default Social;
