import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<title>Grid</title>
		</Helmet>
	);
};

export default Head;
