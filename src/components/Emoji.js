import React from 'react';
import ProtoTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
	<span role='img' aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
		{symbol}
	</span>
);

Emoji.protoTypes = {
	lable: ProtoTypes.string,
	symbol: ProtoTypes.string.isRequired
};

export default Emoji;
