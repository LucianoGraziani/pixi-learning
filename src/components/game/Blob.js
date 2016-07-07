import {Sprite} from 'pixi.js';

import {randomInt} from 'tools/helpers';

export default function Blob(id, renderer, stage, treasureHunter) {

	let blob = new Sprite(treasureHunter['blob.png']),
		spacing = 48,
		xOffset = 150;

	blob.x = spacing * id + xOffset;
	blob.y = randomInt(0, stage.height - blob.height);

	stage.addChild(blob);

	return {
		instance: blob,
	};
}
