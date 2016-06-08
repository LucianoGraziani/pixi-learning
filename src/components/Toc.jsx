import React from 'react';
import {IndexLink} from 'react-router';

var Toc = () => {
  return (
    <div className='top-bar'>
      <ul className='menu'>
        <li>
          <IndexLink to='/ex1-renderer'>Example 1: Creating the renderer and stage</IndexLink>
        </li>
        <li><h3>Pixi sprites</h3></li>
        <ul>
          <li>
            <IndexLink to='/ex2-texture-cache'>Example 2: Loading images into the texture cache</IndexLink>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Toc;
