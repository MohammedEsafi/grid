import React from 'react';
import { Head } from '@components';
import { GlobalStyle } from '@styles';
import ProtoTypes from 'prop-types';

const Layout = ({ children }) => {
	return (
		<>
			<Head />
			<div id='root'>
				<GlobalStyle />
				<div id='content'>{children}</div>
			</div>
		</>
	);
};

Layout.protoTypes = {
	children: ProtoTypes.node.isRequired
};

export default Layout;
