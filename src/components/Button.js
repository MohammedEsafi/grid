import React from 'react';
import styled, { css } from 'styled-components';
import ProtoTypes from 'prop-types';

const StyledButton = styled.button`
	${(props) =>
		props.primary
			? css`
					background-color: var(--black);
					border: none;
					color: var(--white);
			  `
			: css`
					background-color: var(--white);
					border: 1px solid var(--gray-light);
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
