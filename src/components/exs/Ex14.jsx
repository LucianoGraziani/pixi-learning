import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Container, Text} from 'pixi.js';

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
function createText(stage) {
	let message = new Text('Hello Pixi!', {
		font: '32px sans-serif',
		fill: 'white',
	});

	message.position.set(54, 96);
	stage.addChild(message);
}

export default class Ex14 extends React.Component {
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

		createText(stage);
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
				<div style={{float: 'right', width: '300px'}}>
					<IndexLink to="/">Return</IndexLink>
					<div>
						<h4>Added:</h4>
						<ul>
							<li>Pixi Text Object.</li>
						</ul>
					</div>
				</div>
				<div style={{clear: 'both'}}></div>
			</div>
		);
	}
}
