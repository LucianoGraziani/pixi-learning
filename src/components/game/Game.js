import {loader as pixiLoader, Container, Sprite} from 'pixi.js';

import 'images/dungeon/treasureHunter.png';
import treasureHunterURL from 'images/dungeon/treasureHunter.json';
import Explorer from 'components/game/Explorer';
import Door from 'components/game/Door';
import Treasure from 'components/game/Treasure';
import Blob from 'components/game/Blob';

export default {
	mount(renderer, stage) {
		let gameScene = new Container();
		stage.addChild(gameScene);

		pixiLoader.add(treasureHunterURL).load(function setup() {
			let treasureHunter = pixiLoader.resources[treasureHunterURL].textures,
				dungeon = new Sprite(treasureHunter['dungeon.png']);
			gameScene.addChild(dungeon);

			Door.mount(renderer, gameScene, treasureHunter);

			let numberOfBlobs = 6,
				blobs = [];
			for (let i = 0; i < numberOfBlobs; i++) {
				blobs.push(new Blob(i, renderer, gameScene, treasureHunter));
			}

			Explorer.mount(renderer, gameScene, treasureHunter);
			Treasure.mount(renderer, gameScene, treasureHunter);
		});
	},
};
