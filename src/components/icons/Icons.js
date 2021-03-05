import React from 'react';
import {
	Phone,
	Chart,
	Zap,
	ThumbsUp,
	Check,
	Facebook,
	Linkedin,
	Slack,
	Twitter
} from '@components/icons';
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
		case 'Check':
			return <Check />;
		case 'Facebook':
			return <Facebook />;
		case 'Linkedin':
			return <Linkedin />;
		case 'Slack':
			return <Slack />;
		case 'Twitter':
			return <Twitter />;
		default:
			throw new Error('Icon not found!');
	}
};

Icons.protoType = {
	name: ProtoTypes.string.isRequired
};

export default Icons;
