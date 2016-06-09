import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container} from 'pixi.js';

export default class Ex02 extends React.Component {
  componentDidMount() {
    let renderelement = ReactDOM.findDOMNode(this.refs.renderer);

    //Create the renderer
    var renderer = PIXI.autoDetectRenderer(256, 256, {
      view: renderelement,
      backgroundColor: 0x000000,
      antialias: false,
      transparent: false,
      resolution: 1
    });

    //Create a container object called the `stage`
    var stage = new Container();

    //Tell the `renderer` to `render` the `stage`
    renderer.render(stage);

    renderer.autoResize = true;

    var cat;

    setTimeout(() => {
      pixiLoader.add(require('images/cat.png')).load(function setup() {
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

  render() {
    return (
      <div>
        <div style={{
          float: 'left'
        }}>
          <canvas ref='renderer'></canvas>
        </div>
        <div style={{
          float: 'right',
          width: '300px'
        }}>
          <IndexLink to='/'>Return</IndexLink>
          <div>Pixi’s autoDetectRenderer method figures out whether to use the Canvas Drawing API or WebGL to render graphics, depending on which is available</div>
        </div>
        <div style={{
          clear: 'both'
        }}></div>
      </div>
    );
  }
}
