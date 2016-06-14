import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI from 'pixi.js';

export default class Ex01 extends React.Component {
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
		let stage = new PIXI.Container();

		//Tell the `renderer` to `render` the `stage`
		renderer.render(stage);

		renderer.autoResize = true;

		setTimeout(() => {
			renderer.view.style.border = '3px dashed blue';
			renderer.resize(512, 512);
			renderer.backgroundColor = 0x061639;
			renderer.render(stage);
		}, 3000);
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
					<div>Pixi’s autoDetectRenderer method figures out whether to use the Canvas Drawing API or WebGL to render graphics, depending on which is available</div>
				</div>
				<div style={{
					clear: 'both',
				}}></div>
			</div>
		);
	}
}
