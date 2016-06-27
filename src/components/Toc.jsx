import React from 'react';

import TocElement from 'components/TocElement';
import TocGroup from 'components/TocGroup';
import routes from 'constants/routes';

const Toc = () => {
	return (
		<div className="top-bar">
			<ul className="menu">
				<TocElement link={routes.EX1} description="Example 01: Creating the renderer and stage"/>
				<TocGroup title="Pixi sprites">
					<TocElement link={routes.EX2} description="Example 02: Loading images into the texture cache"/>
					<TocElement link={routes.EX3} description="Example 03: Monitoring load progress"/>
					<TocElement link={routes.EX4} description="Example 04: Positioning sprites"/>
					<TocElement link={routes.EX5} description="Example 05: TileSet sub-images"/>
					<TocElement link={routes.EX6} description="Example 06: Work with Texture Atlas"/>
					<TocElement link={routes.EX7} description="Example 07: Adding blobs on random places of the dungeon"/>
				</TocGroup>
				<TocGroup title="Pixi motion">
					<TocElement link={routes.EX8} description="Example 08: Basic movement"/>
					<TocElement link={routes.EX9} description="Example 09: Using velocity properties"/>
				</TocGroup>
				<TocGroup title="Game tools">
					<TocElement link={routes.EX10} description="Example 10: Game state"/>
					<TocElement link={routes.EX11} description="Example 11: Keyboard events"/>
				</TocGroup>
				<TocGroup title="Graphics and position">
					<TocElement link={routes.EX12} description="Example 12: Local and global position check"/>
					<TocElement link={routes.EX13} description="Example 13: Graphics Primitives"/>
					<TocElement link={routes.EX14} description="Example 14: Displaying Text"/>
				</TocGroup>
				<TocElement link={routes.EX15} description="Example 15: Collision Detection"/>
			</ul>
		</div>
	);
};

export default Toc;
