import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';

const TocElement = ({link, description}) => {
	return (
		<li>
			<IndexLink to={`/${link}`}>{description}</IndexLink>
		</li>
	);
};
TocElement.propTypes = {
	link: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default TocElement;
