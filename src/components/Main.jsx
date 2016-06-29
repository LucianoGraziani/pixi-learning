import React, {PropTypes} from 'react';
let Main = ({children}) => {
	return (
		<div>
			<div className="row">
				<div className="column small-centered medium-6 large-4">
					{children}
				</div>
			</div>
		</div>
	);
};
Main.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Main;
