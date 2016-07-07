import {Sprite} from 'pixi.js';

export default {
	mount(renderer, stage, treasureHunter) {
		let door = new Sprite(treasureHunter['door.png']);

		door.x = 32;
		stage.addChild(door);
		renderer.render(stage);
	},
};
