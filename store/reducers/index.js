import {combineReducers} from 'redux';
import CatsReducer from './CatsReducer';

const rootReducer = combineReducers({
  CatsReducer: CatsReducer,
});

export default (state, action) =>
  rootReducer(action.type === 'LOGOUT_USER' ? undefined : state, action);
