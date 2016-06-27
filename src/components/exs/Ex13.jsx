import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Container, Graphics} from 'pixi.js';

let requestId,
	renderer,
	stage;

function state() {
	// TODO
}

function gameLoop() {
	// Loop this function 60 times per second
	requestId = requestAnimationFrame(gameLoop);

	//Update the current game state:
	state();

	//Render the stage
	renderer.render(stage);
}

function createRectangle(stage) {
	let rectangle = new Graphics();
	rectangle.lineStyle(4, 0xFF3300, 1);
	rectangle.beginFill(0x66CCFF);
	rectangle.drawRect(0, 0, 64, 64);
	rectangle.endFill();
	rectangle.x = 170;
	rectangle.y = 170;
	stage.addChild(rectangle);
}
function createCircle(stage) {
	let circle = new Graphics();
	circle.beginFill(0x9966FF);
	circle.drawCircle(0, 0, 32);
	circle.endFill();
	circle.x = 64;
	circle.y = 130;
	stage.addChild(circle);
}
function createElipse(stage) {
	let ellipse = new Graphics();
	ellipse.beginFill(0xFFFF00);
	ellipse.drawEllipse(0, 0, 50, 20);
	ellipse.endFill();
	ellipse.x = 180;
	ellipse.y = 130;
	stage.addChild(ellipse);
}
function createRoundedRectangle(stage) {
	let roundBox = new Graphics();
	roundBox.lineStyle(4, 0x99CCFF, 1);
	roundBox.beginFill(0xFF9933);
	roundBox.drawRoundedRect(0, 0, 84, 36, 10);
	roundBox.endFill();
	roundBox.x = 48;
	roundBox.y = 190;
	stage.addChild(roundBox);
}
function createLine(stage) {
	let line = new Graphics();
	line.lineStyle(4, 0xFFFFFF, 1);
	line.moveTo(0, 0);
	line.lineTo(80, 50);
	line.x = 32;
	line.y = 32;
	stage.addChild(line);
}
function createPoligon(stage) {
	let triangle = new Graphics();
	triangle.beginFill(0x66FF33);
	//Use `drawPolygon` to define the triangle as
	//a path array of x/y positions
	triangle.drawPolygon([
		-32, 64, //First point
		32,
		64, //Second point
		0,
		0,
	]); //Third point

	//Fill shape's color
	triangle.endFill();

	//Position the triangle after you've drawn it.
	//The triangle's x/y position is anchored to its first point in the path
	triangle.x = 180;
	triangle.y = 22;

	stage.addChild(triangle);
}

export default class Ex13 extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
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
		createCircle(stage);
		createElipse(stage);
		createRoundedRectangle(stage);
		createLine(stage);
		createPoligon(stage);
		gameLoop();
	}
	componentWillUnmount() {
		cancelAnimationFrame(requestId);
		requestId = undefined;
		pixiLoader.reset();
		stage.destroy();
		renderer.destroy();
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
							<li>Pixi Graphics Primitives.</li>
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
