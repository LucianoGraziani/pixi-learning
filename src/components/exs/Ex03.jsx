import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container} from 'pixi.js';

export default class Ex03 extends React.Component {
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
			pixiLoader.add(require('images/cat.png')).on('progress', function loadProgressHandler(loader, resource) {

				//Display the file `url` currently being loaded
				console.log('loading: ' + resource.url);

				//Display the precentage of files currently loaded
				console.log('progress: ' + loader.progress + '%');

				//If you gave your files names as the first argument
				//of the `add` method, you can access them like this
				//console.log('loading: ' + resource.name);
			}).load(function setup() {
				cat = new Sprite(pixiLoader.resources[require('images/cat.png')].texture);

				//Add the cat to the stage
				stage.addChild(cat);

				renderer.render(stage);
			});
		}, 3000);

		setTimeout(() => {
			cat.visible = false;
			renderer.render(stage);
		}, 5000);
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
							<li>Aliases</li>
							<li>Textures progress callback</li>
							<li>Texture collection reset</li>
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
