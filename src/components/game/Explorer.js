import {Sprite} from 'pixi.js';

import Keyboard from 'tools/keyboard';
import {LoopEvent} from 'tools/GameLooper';
import contain from 'tools/contain';
import {StageProps} from 'components/game/Stage';

export default {
	mount(renderer, stage, treasureHunter) {
		let explorer = new Sprite(treasureHunter['explorer.png']);

		explorer.x = 68;
		explorer.y = stage.height / 2 - explorer.height / 2;
		explorer.vx = 0;
		explorer.vy = 0;
		stage.addChild(explorer);
		renderer.render(stage);

		LoopEvent.add(function explorerEvent() {
			let hitWall = contain(explorer, StageProps.boundaries);
			explorer.x += hitWall === 'left' || hitWall === 'right' ? 0 : explorer.vx;
			explorer.y += hitWall === 'top' || hitWall === 'bottom' ? 0 : explorer.vy;
		});

		let left = Keyboard(37,
				() => explorer.vx = -1,
				() => explorer.vx = !right.isDown ? 0 : explorer.vx
			),
			up = Keyboard(38,
				() => explorer.vy = -1,
				() => explorer.vy = !down.isDown ? 0 : explorer.vy
			),
			right = Keyboard(39,
				() => explorer.vx = 1,
				() => explorer.vx = !left.isDown ? 0 : explorer.vx
			),
			down = Keyboard(40,
				() => explorer.vy = 1,
				() => explorer.vy = !up.isDown ? 0 : explorer.vy
			);

		return explorer;
	},
};
