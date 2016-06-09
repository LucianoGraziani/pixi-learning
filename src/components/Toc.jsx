import React from 'react';
import {IndexLink} from 'react-router';

var Toc = () => {
  return (
    <div className='top-bar'>
      <ul className='menu'>
        <li>
          <IndexLink to='/ex01-renderer'>Example 01: Creating the renderer and stage</IndexLink>
        </li>
        <li><h3>Pixi sprites</h3></li>
        <ul>
          <li>
            <IndexLink to='/ex02-texture-cache'>Example 02: Loading images into the texture cache</IndexLink>
          </li>
          <li>
            <IndexLink to='/ex03-load-progress'>Example 03: Monitoring load progress</IndexLink>
          </li>
          <li>
            <IndexLink to='/ex04-positioning-sprites'>Example 04: Positioning sprites</IndexLink>
          </li>
          <li>
            <IndexLink to='/ex05-tileset-sprites'>Example 05: TileSet sub-images</IndexLink>
          </li>
          <li>
            <IndexLink to='/ex07-dungeon-random-blobs'>Example 07: Adding blobs on random places of the dungeon</IndexLink>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Toc;
