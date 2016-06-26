import React from 'react';
import {IndexLink} from 'react-router';

const TocElement = ({link, description}) => {
	return (
		<li>
			<IndexLink to={`/${link}`}>{description}</IndexLink>
		</li>
	);
};

export default TocElement;
