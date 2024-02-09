import { combineReducers } from "redux";

import { counterReducer } from './counter';
import todoList from "./todo";
const allReducers = combineReducers({
  counter: counterReducer
  ,
  todo:todoList,
  // add more reducers here
});
export default allReducers