import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import config from '@config';
import { clamping } from '@utils';
import Icons from '@components/icons';
import { media } from '@styles';

const { breakpoints, fontSize } = config;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	border-radius: var(--border-radius);
	width: 33%;

	${media.tablet`
		width: 100%;
	`}

	${(props) =>
		props.top &&
		css`
			box-shadow: var(--p-box-shadow);
		`};
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > p {
		color: var(--purple-dark);
		font-weight: bold;
		margin: 0;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.sm, fontSize.md)};
	}

	& > .tag {
		color: var(--black);
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xxs, fontSize.xs)};
		border: 1px solid var(--purple-dark);
		border-radius: var(--r-border-radius);
		padding: 5px 10px;
	}
`;

const Price = styled.p`
	font-weight: 800;
	font-size: ${clamping(
		breakpoints.phone,
		breakpoints.desktop,
		fontSize.xl + 0.3,
		fontSize.xxl + 0.3
	)};
	margin: 0;

	& > span {
		font-weight: 600;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xxs, fontSize.xs)};
		text-transform: uppercase;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li {
		display: flex;
		align-items: center;

		& > p {
			margin: 0.5em 0;
		}

		& > span {
			width: 25px;
			height: 25px;
			padding: 2px;
			margin-right: 10px;
			border-radius: 100%;
			background-color: var(${(props) => props.color});

			& > svg {
				width: 100%;
				height: 100%;
			}
		}
	}
`;

const Plan = ({ title, best = false, price, duration, feature, color }) => {
	return (
		<Wrapper top={best}>
			<Top>
				<p>{title}</p>
				{best && <span className='tag'>BEST!</span>}
			</Top>
			<Price>
				{price}
				<span>
					{' / '}
					{duration}
				</span>
			</Price>
			<List color={color}>
				{feature &&
					feature.map((item, index) => (
						<li key={index}>
							<span>
								<Icons name='Check' />
							</span>
							<p>{item}</p>
						</li>
					))}
			</List>
		</Wrapper>
	);
};

Plan.propTypes = {
	title: PropTypes.string.isRequired,
	best: PropTypes.bool.isRequired,
	price: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	feature: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Plan;
