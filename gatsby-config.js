const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Grid'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, `src`, `images`)
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
};
