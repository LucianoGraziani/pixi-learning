import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Container, Sprite, Graphics, Text} from 'pixi.js';

import collisionSystem from 'tools/collision-system';
import Keyboard from 'tools/keyboard';
import catURI from 'images/cat.png';

let requestId,
	renderer,
	stage;
let cat, box, message;

function createRectangle(stage) {
	box = new Graphics();
	box.beginFill(0xccff99);
	box.drawRect(0, 0, 64, 64);
	box.endFill();
	box.x = 400;
	box.y = 256 - box.height / 2;
	stage.addChild(box);
}
function createText(stage) {
	message = new Text('No collision...', {
		font: '32px sans-serif',
		fill: 'white',
	});

	message.position.set(54, 96);
	stage.addChild(message);
}
//Capture the keyboard arrow keys
let left, right, up, down;

function state() {
	//use the cat's velocity to make it move
	cat.x += cat.vx;
	cat.y += cat.vy;

	//check for a collision between the cat and the box
	if (collisionSystem(cat, box)) {
		//if there's a collision, change the message text
		//and tint the box red
		message.text = 'hit!';
		box.tint = 0xff3300;
	} else {
		//if there's no collision, reset the message
		//text and the box's color
		message.text = 'No collision...';
		box.tint = 0xccff99;
	}
}

function gameLoop() {
	// Loop this function 60 times per second
	requestId = requestAnimationFrame(gameLoop);
	//Update the current game state:
	state();
	//Render the stage
	renderer.render(stage);
}

export default class Ex15 extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		left = Keyboard(37, () => cat.vx = -1, () => {
			cat.vx = !right.isDown
				? 0
				: cat.vx;
		}),
		up = Keyboard(38, () => cat.vy = -1, () => {
			cat.vy = !down.isDown
				? 0
				: cat.vy;
		}),
		right = Keyboard(39, () => cat.vx = 1, () => {
			cat.vx = !left.isDown
				? 0
				: cat.vx;
		}),
		down = Keyboard(40, () => cat.vy = 1, () => {
			cat.vy = !up.isDown
				? 0
				: cat.vy;
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

		createRectangle(stage);
		pixiLoader.add(catURI).load(function setup() {
			cat = new Sprite(pixiLoader.resources[catURI].texture);
			cat.x = 156;
			cat.y = 256 - cat.height / 2;
			cat.vx = 0;
			cat.vy = 0;

			//Add the cat to the stage
			stage.addChild(cat);

			createText(stage);

			gameLoop();
		});
	}
	componentWillUnmount() {
		cancelAnimationFrame(requestId);
		requestId = undefined;
		pixiLoader.reset();
		stage.destroy();
		renderer.destroy();
		left = right = up = down = undefined; // TODO unbind
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
							<li>Collision Detection.</li>
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
