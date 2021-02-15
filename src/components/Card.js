import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '@components/icons';
import { Button } from '@components';
import { Link } from 'gatsby';

const Container = styled.div`
	display: flex;
	flex-direction: column;

	& a {
		font-weight: bold;
		padding: 10px;
		display: block;
	}

	& > button {
		margin-top: auto;
		width: fit-content;
	}
`;

const IconWrapper = styled.div`
	background-color: var(${(props) => props.color});
	width: 50px;
	height: 50px;
	border-radius: 100%;
	padding: 5px;

	& > * {
		width: 100%;
		height: 100%;
	}
`;

const P = styled.p`
	margin-top: 0;
`;

const Card = ({ iconName, color, title, description }) => {
	return (
		<Container>
			<IconWrapper color={color}>
				<Icons name={iconName} />
			</IconWrapper>
			<h4>{title}</h4>
			<P>{description}</P>
			<Button>
				<Link to='#'>Learn More</Link>
			</Button>
		</Container>
	);
};

Card.propTypes = {
	iconName: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Card;
