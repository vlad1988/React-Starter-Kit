import {combineReducers} from 'redux';
import todo from './todo';
import goals from './goals';

const todoApp = combineReducers({
  todo,
  goals
});

export default todoApp
