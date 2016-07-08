import {Sprite} from 'pixi.js';

import {randomInt} from 'tools/helpers';
import contain from 'tools/contain';
import {StageProps} from 'components/game/Stage';
import {LoopEvent} from 'tools/GameLooper';
import collisionSystem from 'tools/collision-system';

export default class Blob {
	constructor(id, renderer, stage, treasureHunter) {
		let self = this,
			spacing = 48,
			xOffset = 150,
			speed = 2,
			direction = id % 2 === 0 ? 2 : -2;

		this.sprite = new Sprite(treasureHunter['blob.png']);

		this.sprite.x = spacing * id + xOffset;
		this.sprite.y = randomInt(StageProps.boundaries.y, StageProps.boundaries.height - this.sprite.height);
		this.sprite.vy = speed * direction;
		stage.addChild(this.sprite);

		LoopEvent.add(function spriteEvent() {
			let hitWall = contain(self.sprite, StageProps.boundaries);
			if (hitWall === 'top' || hitWall === 'bottom') {
				self.sprite.vy *= -1;
			}
			self.sprite.y += self.sprite.vy;
		});
	}
	addCollision(explorer, healthBar) {
		let {sprite} = this;
		LoopEvent.add(function collisionBlobExplorer() {
			if(collisionSystem(explorer, sprite)) {
				explorer.alpha = 0.5;
				healthBar.outer.width -= 1;
			} else {
				explorer.alpha = 1;
			}
		});
	}
}
