import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import { useEventListener } from '@hooks';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from '@components';
import { media } from '@styles';

const { breakpoints, fontSize } = config;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 2fr 1.15fr 1.3fr 1.3fr;
	grid-template-rows: minmax(100px, auto) 3fr 2fr 0.5fr 0.5fr 0.5fr;
	gap: 1em;

	${media.tablet`
		grid-template-columns: 1.5fr 2fr;
		grid-template-rows: minmax(100px, auto) 3fr 2fr auto;
		margin-top: 25px;

		& > div {
			&:nth-child(n + 5):nth-child(-n + 9) {
				display: none;
			}
		}
	`}

	& > div {
		& > *:not(p):not(button) {
			border-radius: var(--border-radius);
			overflow: hidden;
		}

		& > p {
			margin: 0;
			color: black;
			line-height: 180%;
			font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
		}

		&:nth-child(1) {
			align-self: start;
		}

		&:nth-child(2) {
			grid-column: 4 / 6;
			align-self: end;

			${media.tablet`
				grid-column: 2 / 3;
			`}
		}

		&:nth-child(3) {
			grid-column: 2 / 4;
			grid-row: 1 / 3;

			${media.tablet`
				grid-column: 2 / 3;
			`}
		}

		&:nth-child(4) {
			grid-row: 2 / 4;
		}

		&:nth-child(7) {
			grid-row: 3 / 6;
		}

		&:nth-child(8) {
			grid-column: 3 / 5;
			grid-row: 3 / 7;
		}

		&:nth-child(9) {
			grid-row: 3 / 5;
		}

		&:nth-child(10) {
			grid-row: 4 / 6;

			${media.tablet`
				grid-row: 4 / 5;
				grid-column: 2 / 3;
			`}

			& > button {
				width: 100%;
			}
		}
	}
`;

const StyledLink = styled(Link)`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.md, fontSize.lg)};
	padding: 10px 15px;
	font-weight: bold;
	display: block;
`;

const Grid = () => {
	const refWrapper = useRef(null);
	const handleResize = useCallback(() => {
		let scale = window.innerWidth > 768 ? 0.6 : 0.9;

		refWrapper.current.style.height = `${refWrapper.current.offsetWidth * scale}px`;
	}, []);

	const setRef = useCallback(
		(node) => {
			if (!node) return;
			refWrapper.current = node;

			handleResize();
		},
		[handleResize]
	);

	const { allFile } = useStaticQuery(
		graphql`
			query {
				allFile(filter: { relativeDirectory: { eq: "grid" } }) {
					edges {
						node {
							childImageSharp {
								fluid(maxWidth: 500, traceSVG: { color: "#6C5CE7" }) {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
					}
				}
			}
		`
	);

	useEventListener('resize', handleResize);

	return (
		<Wrapper ref={setRef}>
			<div>
				<p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
			</div>
			<div>
				<p>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
			</div>
			{allFile.edges.map((file, index) => (
				<div key={index}>
					<Img
						alt=''
						fluid={file.node.childImageSharp.fluid}
						imgStyle={{
							objectFit: 'cover'
						}}
						style={{
							width: '100%',
							height: '100%'
						}}
					/>
				</div>
			))}
			<div>
				<Button primary rounded>
					<StyledLink to='#'>Learn More</StyledLink>
				</Button>
			</div>
		</Wrapper>
	);
};

export default Grid;
