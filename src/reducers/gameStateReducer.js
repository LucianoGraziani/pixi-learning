import gameStates from 'constants/gameStates';
import initialState from 'reducers/initialState';
import { PAUSE_GAME, CONTINUE_GAME, END_GAME } from 'constants/actionTypes';

export default function gameStateReducer(state = initialState.gameState, action) {
	switch (action.type) {
	case PAUSE_GAME:
		return gameStates.PAUSED;
	case CONTINUE_GAME:
		return gameStates.PLAYING;
	case END_GAME:
		return gameStates.FINISHED;
	default:
		return state;
	}
}
