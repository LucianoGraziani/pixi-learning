/*
 * Here's the contain function that does all this work. The function checks
 * tosee if the sprite has crossed the boundaries of the containing object.
 * If it has, the code moves the sprite back into that boundary. The contain
 * function also returns a collision variable with the value 'top', 'right',
 * 'bottom' or 'left', depending on which side of the boundary the sprite hit.
 * (collision will be undefined if the sprite didn't hit any of the boundaries.)
 */
export default function contain(sprite, container) {
	let collision = null;

	//Left
	if (sprite.x < container.x) {
		sprite.x = container.x;
		collision = 'left';
	}

	//Top
	if (sprite.y < container.y) {
		sprite.y = container.y;
		collision = 'top';
	}

	//Right
	if (sprite.x + sprite.width > container.width) {
		sprite.x = container.width - sprite.width;
		collision = 'right';
	}

	//Bottom
	if (sprite.y + sprite.height > container.height) {
		sprite.y = container.height - sprite.height;
		collision = 'bottom';
	}

	//Return the `collision` value
	return collision;
}
