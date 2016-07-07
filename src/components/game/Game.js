import {loader as pixiLoader, Sprite} from 'pixi.js';

import 'images/dungeon/treasureHunter.png';
import treasureHunterURL from 'images/dungeon/treasureHunter.json';
import Explorer from 'components/game/Explorer';
import Door from 'components/game/Door';
import Treasure from 'components/game/Treasure';
import Blob from 'components/game/Blob';

export default {
	mount(renderer, stage) {
		pixiLoader.add(treasureHunterURL).load(function setup() {
			let treasureHunter = pixiLoader.resources[treasureHunterURL].textures,
				dungeon = new Sprite(treasureHunter['dungeon.png']);
			stage.addChild(dungeon);

			renderer.render(stage);

			Door.mount(renderer, stage, treasureHunter);

			let numberOfBlobs = 6,
				blobs = [];
			for (let i = 0; i < numberOfBlobs; i++) {
				blobs.push(new Blob(i, renderer, stage, treasureHunter));
			}

			Explorer.mount(renderer, stage, treasureHunter);
			Treasure.mount(renderer, stage, treasureHunter);
		});
	},
};
