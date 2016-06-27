import React, {PropTypes} from 'react';

const TocGroup = ({title, children}) => {
	return (
		<li>
			<h3>{title}</h3>
			<ul>
				{children}
			</ul>
		</li>
	);
};
TocGroup.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TocGroup;
