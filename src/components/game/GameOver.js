import {Container, Text} from 'pixi.js';

export default {
	mount(renderer, stage) {
		let gameOverScene = new Container(),
			message = new Text(
				'The End!', {
					font: '64px Futura',
					fill: 'white',
				}
			);

		stage.addChild(gameOverScene);
		renderer.render(stage);

		gameOverScene.visible = false;
		message.x = 120;
		message.y = renderer.height / 2 - 32;
		gameOverScene.addChild(message);

	},
};
