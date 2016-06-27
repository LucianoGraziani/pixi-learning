import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container} from 'pixi.js';

import {randomInt} from 'tools/helpers';
import Keyboard from 'tools/keyboard';
import 'images/dungeon/treasureHunter.png';

import treasureHunterReference from 'images/dungeon/treasureHunter.json';

let requestId,
	renderer,
	stage;
// Define variables that might be used in more than one function
let treasureHunter,
	dungeon,
	explorer,
	treasure,
	door;

function everclick() {
	let explorerPos = explorer.getGlobalPosition(),
		treasurePos = treasure.getGlobalPosition(),
		localPos = explorer.toLocal(treasure.position);

	console.log(`The explorer is on (${explorerPos.x},${explorerPos.y}) px`);
	console.log(`The treasure is on (${treasurePos.x},${treasurePos.y}) px`);
	console.log(`The explorer is (${localPos.x},${localPos.y}) px near the treasure.`);
}
//Capture the keyboard arrow keys
let left,
	right,
	up,
	down;

function state() {
	explorer.x += explorer.vx;
	explorer.y += explorer.vy;
}

function gameLoop() {
	// Loop this function 60 times per second
	requestId = requestAnimationFrame(gameLoop);

	//Update the current game state:
	state();

	//Render the stage
	renderer.render(stage);
}

export default class Ex12 extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		left = Keyboard(37, () => explorer.vx = -1, () => {
			explorer.vx = !right.isDown
				? 0
				: explorer.vx;
			everclick();
		}),
		up = Keyboard(38, () => explorer.vy = -1, () => {
			explorer.vy = !down.isDown
				? 0
				: explorer.vy;
			everclick();
		}),
		right = Keyboard(39, () => explorer.vx = 1, () => {
			explorer.vx = !left.isDown
				? 0
				: explorer.vx;
			everclick();
		}),
		down = Keyboard(40, () => explorer.vy = 1, () => {
			explorer.vy = !up.isDown
				? 0
				: explorer.vy;
			everclick();
		});
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);

		//Create the renderer
		renderer = PIXI.autoDetectRenderer(512, 512, {
			view: renderelement,
			backgroundColor: 0x000000,
			antialias: false,
			transparent: false,
			resolution: 1,
		});

		//Create a container object called the `stage`
		stage = new Container();

		//Tell the `renderer` to `render` the `stage`
		renderer.render(stage);

		renderer.autoResize = true;

		pixiLoader.add(treasureHunterReference).load(function setup() {
			treasureHunter = PIXI.loader.resources[treasureHunterReference].textures;

			dungeon = new Sprite(treasureHunter['dungeon.png']);
			stage.addChild(dungeon);

			explorer = new Sprite(treasureHunter['explorer.png']);
			explorer.x = 68;
			explorer.y = stage.height / 2 - explorer.height / 2;
			explorer.vx = 0;
			explorer.vy = 0;
			stage.addChild(explorer);

			treasure = new Sprite(treasureHunter['treasure.png']);
			treasure.x = stage.width - treasure.width - 48;
			treasure.y = stage.height / 2 - treasure.height / 2;
			stage.addChild(treasure);

			// Create exit door
			door = new Sprite(treasureHunter['door.png']);
			door.x = 32;
			stage.addChild(door);

			let numberOfBlobs = 6;
			for (let i = 0; i < numberOfBlobs; i++) {
				let blob = new Sprite(treasureHunter['blob.png']);

				// Place margins: (32,32), (480, 480)
				blob.x = randomInt(32, stage.height - blob.height * 2);
				blob.y = randomInt(32, stage.height - blob.height * 2);

				stage.addChild(blob);
			}

			gameLoop();
		});
	}
	componentWillUnmount() {
		cancelAnimationFrame(requestId);
		requestId = undefined;
		pixiLoader.reset();
		stage.destroy();
		renderer.destroy();
		left = right = up = down = undefined;
	}
	render() {
		return (
			<div>
				<div style={{
					float: 'left',
				}}>
					<canvas ref="renderer"></canvas>
				</div>
				<div style={{
					float: 'right',
					width: '300px',
				}}>
					<IndexLink to="/">Return</IndexLink>
					<div>
						<h4>Added:</h4>
						<ul>
							<li>Local and global position check.</li>
						</ul>
					</div>
				</div>
				<div style={{
					clear: 'both',
				}}></div>
			</div>
		);
	}
}
