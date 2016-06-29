import { combineReducers } from 'redux';

import gameState from './gameStateReducer';

const rootReducer = combineReducers({
	gameState,
});

export default rootReducer;
