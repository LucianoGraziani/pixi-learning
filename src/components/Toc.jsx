import React from 'react';
import {IndexLink} from 'react-router';

const Toc = () => {
	return (
		<div className="top-bar">
			<ul className="menu">
				<li>
					<IndexLink to="/ex01-renderer">Example 01: Creating the renderer and stage</IndexLink>
				</li>
				<li><h3>Pixi sprites</h3></li>
				<ul>
					<li>
						<IndexLink to="/ex02-texture-cache">Example 02: Loading images into the texture cache</IndexLink>
					</li>
					<li>
						<IndexLink to="/ex03-load-progress">Example 03: Monitoring load progress</IndexLink>
					</li>
					<li>
						<IndexLink to="/ex04-positioning-sprites">Example 04: Positioning sprites</IndexLink>
					</li>
					<li>
						<IndexLink to="/ex05-tileset-sprites">Example 05: TileSet sub-images</IndexLink>
					</li>
					<li>
						<IndexLink to="/ex07-dungeon-random-blobs">Example 07: Adding blobs on random places of the dungeon</IndexLink>
					</li>
				</ul>
				<li><h3>Pixi motion</h3></li>
				<ul>
					<li>
							<IndexLink to="/ex08-basic-movement">Example 08: Basic movement</IndexLink>
					</li>
					<li>
							<IndexLink to="/ex09-velocity-props">Example 09: Using velocity properties</IndexLink>
					</li>
				</ul>
				<li>
					<IndexLink to="/ex10-game-states">Example 10: Game state</IndexLink>
				</li>
				<li>
					<IndexLink to="/ex11-keyboard-events">Example 11: Keyboard events</IndexLink>
				</li>
				<li>
					<IndexLink to="/ex12-local-global-positions">Example 12: Local and global position check</IndexLink>
				</li>
			</ul>
		</div>
	);
};

export default Toc;
