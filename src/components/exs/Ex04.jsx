import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container} from 'pixi.js';

export default class Ex04 extends React.Component {
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);

		//Create the renderer
		let renderer = PIXI.autoDetectRenderer(256, 256, {
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

		let cat;

		setTimeout(() => {
			pixiLoader.add(require('images/cat.png')).load(function setup() {
				cat = new Sprite(pixiLoader.resources[require('images/cat.png')].texture);

				// Positioning
				cat.position.set(96, 96);

				//Add the cat to the stage
				stage.addChild(cat);

				renderer.render(stage);
			});
		}, 1000);

		setTimeout(() => {
			// Scalling
			cat.scale.set(2, 2);
			renderer.render(stage);
		}, 2000);

		setTimeout(() => {
			// Scalling
			cat.anchor.set(0.5, 0.5);
			cat.rotation = 0.5;
			renderer.render(stage);
		}, 3000);
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
							<li>Sprite positioning</li>
							<li>Sprite scalling</li>
							<li>Sprite rotation: (anchor) has its values in radians; (pivot) has its values in px.</li>
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
