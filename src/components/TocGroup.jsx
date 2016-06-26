import React from 'react';

const TocElement = ({title, children}) => {
	return (
		<li>
			<h3>{title}</h3>
			<ul>
				{children}
			</ul>
		</li>
	);
};

export default TocElement;
