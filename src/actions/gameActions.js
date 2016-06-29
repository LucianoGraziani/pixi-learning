import { PAUSE_GAME, CONTINUE_GAME } from 'constans/actionTypes';

export const pauseGame = (gameState) => {
	return {
		type: PAUSE_GAME,
		gameState,
	};
};

export const continueGame = (gameState) => {
	return {
		type: CONTINUE_GAME,
		gameState,
	};
};
