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
		}
	]
};
