import React from 'react';
import styled from 'styled-components';
import { Button } from '@components';

const Flex = styled.div`
	display: flex;

	&:first-child {
		margin-bottom: 20px;
	}

	& > *:first-child {
		margin-right: 20px;
	}
`;

const Form = styled.form`
	color: var(--black);

	& input {
		width: 0;
		min-width: 0;
		flex: 1;
	}

	& input::placeholder {
		color: var(--black);
	}

	& textarea {
		flex: 1;
		font-weight: 600;
		color: var(--purple-dark);
		resize: none;
		font-family: var(--font);
	}

	& textarea::placeholder {
		color: var(--purple-dark);
		font-family: var(--font);
	}

	& input,
	& textarea {
		background-color: var(--gray-soft);
		border: none;
		border-radius: var(--border-radius);
		padding: 10px;
	}

	& input:focus,
	& textarea:focus {
		box-shadow: inset 0px 0px 0px 1px var(--gray-light);
		outline: none;
	}

	& button {
		font-weight: 800;
		text-transform: uppercase;
		padding: 10px 20px;
	}
`;

const Contact = () => {
	return (
		<Form>
			<Flex>
				<input placeholder='Your name' />
				<input placeholder='E-mail' />
			</Flex>
			<Flex>
				<textarea rows='2' placeholder='Leave your message' />
				<Button primary>send</Button>
			</Flex>
		</Form>
	);
};

export default Contact;
