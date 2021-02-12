import React from 'react';
import styled from 'styled-components';
import config from '@config';
import { clamping } from '@utils';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const { breakpoints, fontSize } = config;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Name = styled.p`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xl, fontSize.xxl)};
	font-weight: bold;
	padding-left: 5px;
	color: var(--black);
`;

const ImageContainer = styled.div`
	display: block;
	width: 30px;
	height: 30px;
`;

const Brand = () => {
	const { logo, title } = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "icon.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, traceSVG: { color: "#6C5CE7" }) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}

			title: site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Container>
			<ImageContainer>
				<Img fluid={logo.childImageSharp.fluid} alt={title.siteMetadata.title} />
			</ImageContainer>
			<Name>{title.siteMetadata.title}</Name>
		</Container>
	);
};

export default Brand;
