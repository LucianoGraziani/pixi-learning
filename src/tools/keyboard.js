export default function Keyboard(keyCode, pressHandler, releaseHandler) {
	let key = {};

	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;

	key.press = pressHandler;
	key.release = releaseHandler;

	//The `downHandler`
	key.downHandler = function(event) {
		if (event.keyCode !== key.code) {
			return;
		}
		event.preventDefault();

		if (key.isUp && key.press) key.press();
		key.isDown = true;
		key.isUp = false;
	};

	//The `upHandler`
	key.upHandler = function(event) {
		if (event.keyCode !== key.code) {
			return;
		}
		event.preventDefault();

		if (key.isDown && key.release) key.release();
		key.isDown = false;
		key.isUp = true;
	};

	//Attach event listeners
	window.addEventListener('keydown', key.downHandler.bind(key), false);
	window.addEventListener('keyup', key.upHandler.bind(key), false);

	return key;
}
