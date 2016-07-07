/**
 * Función controladora del loop de animación. Solo puede haber
 * una función activa, esto significa que si se instancian dos
 * veces la misma función, en distintos lados, la última es la
 * única que funcionará.
 *
 * @param {PIXI.renderer}   renderer renderizador de pixi
 * @param {PIXI.stage}   stage
 * @param {Function} callback función que realiza alguna acción
 *                            en el stage.
 *
 * @TODO agregarle un sistema de hooks. Por ejemplo, una cola.
 * Cada vez que se agrega un elemento nuevo en la animación
 * que necesite actualizarse en cada frame, debería estar en
 * una cola de ejecución aquí.
 */

let events = [];

export const LoopEvent = {
	add: (event) => {
		events.push(event);
		return events.length - 1;
	},
	remove: (id) => {
		events.splice(id, 1);
	},
};

export default function gameLoop(renderer, stage) {
	return (function loop() {
		// Update game state
		events.forEach(event => event());

		//Render the stage
		renderer.render(stage);

		// Loop this function 60 times per second
		return requestAnimationFrame(loop);
	})();
}
