import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink} from 'react-router';
import PIXI, {loader as pixiLoader, Sprite, Container, utils as PixiUtils, Rectangle} from 'pixi.js';

const {TextureCache} = PixiUtils;

export default class Ex06 extends React.Component {
  componentDidMount() {
    let renderelement = ReactDOM.findDOMNode(this.refs.renderer);

    //Create the renderer
    var renderer = PIXI.autoDetectRenderer(512, 512, {
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

    //Define variables that might be used in more than one function
    var id,
      dungeon,
      explorer,
      treasure,
      door;

    setTimeout(() => {
      pixiLoader.add(require('images/dungeon/treasureHunter.json')).load(function setup() {
        //There are 3 ways to make sprites from textures atlas frames

        //1. Access the `TextureCache` directly
        var dungeonTexture = TextureCache["dungeon.png"];
        dungeon = new Sprite(dungeonTexture);
        stage.addChild(dungeon);

        //2. Access the texture using throuhg the loader's `resources`:
        explorer = new Sprite(pixiLoader.resources[require('images/dungeon/treasureHunter.json')].textures["explorer.png"]);
        explorer.x = 68;

        //Center the explorer vertically
        explorer.y = stage.height / 2 - explorer.height / 2;
        stage.addChild(explorer);

        //3. Create an optional alias called `id` for all the texture atlas
        //frame id textures.
        id = PIXI.loader.resources[require('images/dungeon/treasureHunter.json')].textures;

        //Make the treasure box using the alias
        treasure = new Sprite(id["treasure.png"]);
        stage.addChild(treasure);

        //Position the treasure next to the right edge of the canvas
        treasure.x = stage.width - treasure.width - 48;
        treasure.y = stage.height / 2 - treasure.height / 2;
        stage.addChild(treasure);

        //Render the stage
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
              <li>Creation of a new tileset with TexturePacker, who also generates the JSON Atlas file.</li>
              <li>Load the JSON atlas file.</li>
              <li>Create sprites from a loaded texture atlas</li>
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
