import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container} from 'pixi.js';

import 'images/dungeon/treasureHunter.png';

//The `randomInt` helper function
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Ex07 extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);

		//Create the renderer
		let renderer = PIXI.autoDetectRenderer(512, 512, {
			view: renderelement,
			backgroundColor: 0x000000,
			antialias: false,
			transparent: false,
			resolution: 1,
		});

		//Create a container object called the `stage`
		let stage = new Container();

		//Tell the `renderer` to `render` the `stage`
		renderer.render(stage);

		renderer.autoResize = true;

		//Define variables that might be used in more than one function
		let treasureHunter,
			dungeon,
			explorer,
			treasure,
			door;

		pixiLoader.add(require('images/dungeon/treasureHunter.json')).load(function setup() {
			treasureHunter = PIXI.loader.resources[require('images/dungeon/treasureHunter.json')].textures;

			dungeon = new Sprite(treasureHunter['dungeon.png']);
			stage.addChild(dungeon);

			explorer = new Sprite(treasureHunter['explorer.png']);
			explorer.x = 68;
			explorer.y = stage.height / 2 - explorer.height / 2;
			stage.addChild(explorer);

			treasure = new Sprite(treasureHunter['treasure.png']);
			treasure.x = stage.width - treasure.width - 48;
			treasure.y = stage.height / 2 - treasure.height / 2;
			stage.addChild(treasure);

			//Render the stage
			renderer.render(stage);
		});

		setTimeout(() => {
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

			renderer.render(stage);
		}, 1000);
	}
	componentWillUnmount() {
		pixiLoader.reset();
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
							<li>Refactored dungeon instanciation code</li>
							<li>Create exit door</li>
							<li>Generate six blobs on random places</li>
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
