import React from 'react';
import ReactDOM from 'react-dom';
import PIXI, {loader as pixiLoader, Container} from 'pixi.js';

import Game from 'components/game/Game';
import GameOver from 'components/game/GameOver';
import gameLoop from 'tools/GameLooper';

export const StageProps = {
	backgroundColor: 0x000000,
	width: 512,
	height: 512,
	boundaries: {
		x: 32,
		y: 15,
		width: 480,
		height: 480,
	},
};

// function end() {
// 	//All the code that should run at the end of the game
// }
let stage, renderer;

export default class Stage extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);
		renderer = PIXI.autoDetectRenderer(StageProps.width, StageProps.height, {
			view: renderelement,
			backgroundColor: StageProps.backgroundColor,
			antialias: false,
			transparent: false,
			resolution: 1,
		});

		stage = new Container();

		renderer.render(stage);
		renderer.autoResize = true;

		GameOver.mount(renderer, stage);
		Game.mount(renderer, stage, GameOver.getEndGameCallback(Game.getGameScene(renderer, stage)));

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
