import React from 'react';
import ReactDOM from 'react-dom';
import PIXI, {loader as pixiLoader, Container} from 'pixi.js';

import Game from 'components/game/Game';
import gameLoop from 'tools/GameLooper';

// //
// function play() {
// 	//All the game logic goes here
// }
//
// function end() {
// 	//All the code that should run at the end of the game
// }

//The game's helper functions:
//`keyboard`, `hitTestRectangle`, `contain` and `randomInt`
let stage, renderer;

export default class Stage extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);
		renderer = PIXI.autoDetectRenderer(512, 512, {
			view: renderelement,
			backgroundColor: 0x000000,
			antialias: false,
			transparent: false,
			resolution: 1,
		});

		stage = new Container();

		renderer.render(stage);
		renderer.autoResize = true;

		Game.mount(renderer, stage);

		gameLoop(renderer, stage);
	}

	render() {
		return (
			<div>
				<canvas ref="renderer"></canvas>
			</div>
		);
	}
}
