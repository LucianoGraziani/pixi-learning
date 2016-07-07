import {Sprite} from 'pixi.js';

export default {
	mount(renderer, stage, treasureHunter) {
		let treasure = new Sprite(treasureHunter['treasure.png']);
		treasure.x = stage.width - treasure.width - 48;
		treasure.y = stage.height / 2 - treasure.height / 2;
		stage.addChild(treasure);

		renderer.render(stage);
	},
};
