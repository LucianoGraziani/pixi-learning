/**
 * Generates a random integer
 * @param  {integer} min
 * @param  {integer} max
 * @return {integer}
 */
export function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
