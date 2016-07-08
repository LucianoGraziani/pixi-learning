import {loader as pixiLoader, Container, Sprite} from 'pixi.js';

import 'images/dungeon/treasureHunter.png';
import treasureHunterURL from 'images/dungeon/treasureHunter.json';
import Explorer from 'components/game/Explorer';
import Door from 'components/game/Door';
import Treasure from 'components/game/Treasure';
import Blob from 'components/game/Blob';
import HealthBar from 'components/game/HealthBar';

export default {
	getGameScene(renderer, stage) {
		let gameScene = new Container();
		stage.addChild(gameScene);
		this.gameScene = gameScene;

		return gameScene;
	},
	mount(renderer, stage, endGameCallback) {
		let {gameScene} = this;
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

			let explorer = Explorer.mount(renderer, gameScene, treasureHunter);
			let treasure = Treasure.mount(renderer, gameScene, treasureHunter);
			Treasure.addTreasureEvent(explorer);
			let healthBar =  HealthBar.mount(stage, gameScene);

			blobs.forEach((blob) => {
				blob.addCollision(explorer, healthBar);
			});

			HealthBar.addEndGameCallback(endGameCallback);
			Door.addEndGameCallback(treasure, endGameCallback);
		});
	},
};
