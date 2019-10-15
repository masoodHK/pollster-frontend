import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import pollsReducer from './pollsReducer';
import userReducer from './userReducer';

export default combineReducers({
    theme: themeReducer,
    polls: pollsReducer,
    user: userReducer
});
