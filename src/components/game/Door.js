import {Sprite} from 'pixi.js';

import {LoopEvent} from 'tools/GameLooper';
import collisionSystem from 'tools/collision-system';

export default {
	mount(renderer, stage, treasureHunter) {
		let door = new Sprite(treasureHunter['door.png']);

		door.x = 32;
		stage.addChild(door);

		this.door = door;
	},
	addEndGameCallback(treasure, callback) {
		let {door} = this,
			id = LoopEvent.add(function checkForEnd() {
				if (collisionSystem(treasure, door)){
					callback(true);
					LoopEvent.remove(id);
				}
			});
	},
};
