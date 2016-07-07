import React, {PropTypes} from 'react';
import {loader as pixiLoader, Sprite} from 'pixi.js';

import catURL from 'images/cat.png';
import Keyboard from 'tools/keyboard';

function gameLoop() {
	// Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	play();

	//Render the stage
	renderer.render(stage);
}

function play() {
	cat.x += cat.vx;
	cat.y += cat.vy;
}

let cat, renderer, stage;

export default class Cat extends React.Component {
	componentDidMount() {
		renderer = this.props.renderer;
		stage = this.props.stage;

		let left = Keyboard(37,
				() => cat.vx = -1,
				() => cat.vx = !right.isDown ? 0 : cat.vx
			),
			up = Keyboard(38,
				() => cat.vy = -1,
				() => cat.vy = !down.isDown ? 0 : cat.vy
			),
			right = Keyboard(39,
				() => cat.vx = 1,
				() => cat.vx = !left.isDown ? 0 : cat.vx
			),
			down = Keyboard(40,
				() => cat.vy = 1,
				() => cat.vy = !up.isDown ? 0 : cat.vy
			);

		pixiLoader.add(catURL).load(() => {
			cat = new Sprite(pixiLoader.resources[catURL].texture);
			cat.x = 156;
			cat.y = 256 - cat.height / 2;
			cat.vx = 0;
			cat.vy = 0;

			//Add the cat to the stage
			stage.addChild(cat);

			renderer.render(stage);
			gameLoop();
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
