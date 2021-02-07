const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@widgets': path.resolve(__dirname, 'src/widgets'),
				'@fonts': path.resolve(__dirname, 'src/fonts')
			}
		}
	});
};
