import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import UserReducer from './users';


const rootReducer = combineReducers({
	routing: routerReducer,
	user: UserReducer
});
export default rootReducer;