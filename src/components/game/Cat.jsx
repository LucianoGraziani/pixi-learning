import React, {PropTypes} from 'react';
import {loader as pixiLoader, Sprite} from 'pixi.js';

import catURL from 'images/cat.png';

export default class Cat extends React.Component {
	componentDidMount() {
		let cat,
			{ renderer, stage } = this.props;

		pixiLoader.add(catURL).load(() => {
			cat = new Sprite(pixiLoader.resources[catURL].texture);
			cat.x = 156;
			cat.y = 256 - cat.height / 2;
			cat.vx = 0;
			cat.vy = 0;

			//Add the cat to the stage
			stage.addChild(cat);

			renderer.render(stage);
		});
	}
	render() {
		return (null);
	}
}
Cat.propTypes = {
	renderer: PropTypes.object.isRequired,
	stage: PropTypes.object.isRequired,
};
