import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container, utils as PixiUtils, Rectangle} from 'pixi.js';

const {TextureCache} = PixiUtils;

export default class Ex05 extends React.Component {
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

    var tileset;

    setTimeout(() => {
      pixiLoader.add(require('images/tileset.png')).load(function setup() {
        //Create the `tileset` sprite from the texture
        tileset = TextureCache[require('images/tileset.png')];

        //Create a rectangle object that defines the position and
        //size of the sub-image you want to extract from the texture
        var rectangle = new Rectangle(192, 128, 64, 64);

        //Tell the texture to use that rectangular section
        tileset.frame = rectangle;

        //Create the sprite from the texture
        var rocket = new Sprite(tileset);

        //Position the rocket sprite on the canvas
        rocket.x = 32;
        rocket.y = 32;

        //Add the cat to the stage
        stage.addChild(rocket);

        renderer.render(stage);
      });
    }, 1000);

  }

  componentWillMount() {
    pixiLoader.reset();
  }
  componentWillUnmount() {
    pixiLoader.reset();
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
          <div>
            <h4>Added:</h4>
            <ul>
              <li>Load tileset</li>
              <li>Select an element and render only it.</li>
            </ul>
          </div>
        </div>
        <div style={{
          clear: 'both'
        }}></div>
      </div>
    );
  }
}
