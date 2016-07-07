import React from 'react';
import ReactDOM from 'react-dom';
import PIXI, {loader as pixiLoader, Container} from 'pixi.js';

import Cat from 'components/game/Cat';

//Setup Pixi and load the texture atlas files - call the `setup`
//function when they've loaded

function gameLoop() {
	// Loop this function 60 times per second
	requestAnimationFrame(gameLoop);
	//Render the stage
	renderer.render(stage);
}
// //
// function play() {
// 	//All the game logic goes here
// }
//
// function end() {
// 	//All the code that should run at the end of the game
// }

//The game's helper functions:
//`keyboard`, `hitTestRectangle`, `contain` and `randomInt`
let stage, renderer;

export default class Stage extends React.Component {
	constructor() {
		super();

		this.state = {
			status: false,
		};
	}
	componentWillMount() {
		pixiLoader.reset();
	}
	componentDidMount() {
		//Initialize the game sprites, set the game `state` to `play`
		//and start the 'gameLoop'
		let renderelement = ReactDOM.findDOMNode(this.refs.renderer);
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
		this.setState({
			status: true,
		});

		gameLoop();
	}

	render() {
		let {status} = this.state,
			renderCat = () => {
				if(status) {
					return <Cat renderer={renderer} stage={stage} />;
				}
			};
		return (
			<div>
				<canvas ref="renderer"></canvas>
				{renderCat()}
			</div>
		);
	}
}
