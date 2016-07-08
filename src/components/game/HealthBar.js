import {DisplayObjectContainer, Graphics} from 'pixi.js';

import {LoopEvent} from 'tools/GameLooper';

export default {
	mount(StageProps, gameScene) {
		let healthBar = new DisplayObjectContainer();
		healthBar.position.set(StageProps.width - 170, 6);
		gameScene.addChild(healthBar);

		//Create the black background rectangle
		let innerBar = new Graphics();
		innerBar.beginFill(0x000000);
		innerBar.drawRect(0, 0, 128, 8);
		innerBar.endFill();
		healthBar.addChild(innerBar);

		//Create the front red rectangle
		let outerBar = new Graphics();
		outerBar.beginFill(0xFF3300);
		outerBar.drawRect(0, 0, 128, 8);
		outerBar.endFill();
		healthBar.addChild(outerBar);
		healthBar.outer = outerBar;

		this.healthBar = healthBar;
		return healthBar;
	},
	addEndGameCallback(callback) {
		let {healthBar} = this;
		let id = LoopEvent.add(function checkForEnd() {
			if (healthBar.outer.width < 0) {
				callback();
				LoopEvent.remove(id);
			}
		});
	},
};
