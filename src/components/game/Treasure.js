import {Sprite} from 'pixi.js';

import collisionSystem from 'tools/collision-system';
import {LoopEvent} from 'tools/GameLooper';

export default {
	mount(renderer, stage, treasureHunter) {
		let treasure = new Sprite(treasureHunter['treasure.png']);
		treasure.x = stage.width - treasure.width - 48;
		treasure.y = stage.height / 2 - treasure.height / 2;
		stage.addChild(treasure);

		this.treasure = treasure;
		return treasure;
	},
	addTreasureEvent(explorer) {
		let {treasure} = this;

		LoopEvent.add(function treasureTaken() {
			if (collisionSystem(explorer, treasure)) {
				treasure.x = explorer.x + 8;
				treasure.y = explorer.y + 8;
			}
		});
	},
};
