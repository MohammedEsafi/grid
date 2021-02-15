import React from 'react';
import { Phone, Chart, Zap, ThumbsUp } from '@components/icons';
import ProtoTypes from 'prop-types';

const Icons = ({ name }) => {
	switch (name) {
		case 'Phone':
			return <Phone />;
		case 'Chart':
			return <Chart />;
		case 'Zap':
			return <Zap />;
		case 'ThumbsUp':
			return <ThumbsUp />;
		default:
			throw new Error('Icon not found!');
	}
};

Icons.protoType = {
	name: ProtoTypes.string.isRequired
};

export default Icons;
