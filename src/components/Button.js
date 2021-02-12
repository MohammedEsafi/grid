import React from 'react';
import styled, { css } from 'styled-components';
import ProtoTypes from 'prop-types';

const StyledButton = styled.button`
	${(props) =>
		props.primary
			? css`
					background-color: var(--black);
					color: var(--white);
			  `
			: css`
					background-color: var(--white);
					color: var(--purple-dark);
			  `};
	${(props) =>
		props.rounded
			? css`
					border-radius: var(--r-border-radius);
			  `
			: css`
					border-radius: var(--border-radius);
			  `};
	cursor: pointer;
	border: none;

	&:focus {
		outline: none;
	}
`;

const Button = ({ children, primary, rounded }) => {
	return (
		<StyledButton primary={primary} rounded={rounded}>
			{children}
		</StyledButton>
	);
};

Button.protoTypes = {
	children: ProtoTypes.node.isRequired,
	primary: ProtoTypes.bool.isRequired,
	rounded: ProtoTypes.bool.isRequired
};

export default Button;
